from flask import Flask, render_template, request, send_file, jsonify
import qrcode
from io import BytesIO

app = Flask(__name__)

class Receipt:
    def __init__(self):
        self.store_name = ""
        self.date = ""
        self.items = []
        self.payment_method = ""
        self.paid_amount = 0
        self.change_amount = 0

    def add_item(self, name, price, quantity):
        self.items.append({"name": name, "price": price, "quantity": quantity})

    def total(self):
        return sum(item["price"] * item["quantity"] for item in self.items)

    def set_payment_info(self, payment_method, paid_amount=0):
        self.payment_method = payment_method
        if payment_method == "cash":
            self.paid_amount = float(paid_amount)
            self.change_amount = self.paid_amount - self.total()
        else:
            self.paid_amount = self.total()
            self.change_amount = 0

    def to_string(self):
        receipt_str = f"店舗名: {self.store_name}\n日付: {self.date}\n\n商品リスト:\n"
        for item in self.items:
            receipt_str += f"{item['name']} - {item['price']}円 x {item['quantity']} = {item['price'] * item['quantity']}円\n"
        receipt_str += f"\n合計: {self.total()}円\n"
        receipt_str += f"支払方法: {self.payment_method}\n"
        if self.payment_method == "cash":
            receipt_str += f"支払金額: {self.paid_amount}円\n"
            receipt_str += f"おつり: {self.change_amount}円\n"
        return receipt_str

receipt = Receipt()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'store_name' in request.form:
            receipt.store_name = request.form['store_name']
            receipt.date = request.form['date']
    return render_template('index.html', receipt=receipt)

@app.route('/add_item', methods=['POST'])
def add_item():
    names = request.form.getlist('item_name[]')
    prices = request.form.getlist('item_price[]')
    quantities = request.form.getlist('item_quantity[]')
    
    for name, price, quantity in zip(names, prices, quantities):
        if name and price and quantity:
            receipt.add_item(name, float(price), int(quantity))
    
    return jsonify({'success': True, 'html': render_template('item_list.html', receipt=receipt)})

@app.route('/generate_qr')
def generate_qr():
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(receipt.to_string())
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    
    img_io = BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)
    return send_file(img_io, mimetype='image/png')

@app.route('/delete_item/<int:item_id>', methods=['POST'])
def delete_item(item_id):
    if 0 <= item_id < len(receipt.items):
        del receipt.items[item_id]
    return jsonify({'success': True, 'html': render_template('item_list.html', receipt=receipt)})

@app.route('/set_payment', methods=['POST'])
def set_payment():
    payment_method = request.form['payment_method']
    paid_amount = request.form.get('paid_amount', 0)
    receipt.set_payment_info(payment_method, paid_amount)
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(host='127.0.0.1',port = 7000)