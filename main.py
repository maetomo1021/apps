from . import db
from .models import (User, Data, Item, Btoitem, Purchase_history, Cart, Blog)
import os
from .color import *

@main.route('/')
def index():
    head = render_template("head.html")
    header = render_template("header.html")
    footer = render_template("footer.html")

    color_bg_blue("/")
    return render_template('index.html', head = head, header = header, footer = footer)

@main.route('/profile', methods=["GET", "POST"])
@login_required
def profile():
    user_data = current_user
    user = User.query.filter_by(email = user_data.email).first()

    data = Data.query.filter_by(id = user.id, name = user.name).first()
    if request.method == "POST":
        buttons = request.form.get('button')
        if buttons == "更新" :
            name = request.form.get('name')
            if not data.name == name:
                if not name == "" :
                    data.name = name
                    user_data.name = name

            campany = request.form.get('campany')
            if not data.campany == campany:
                if not campany == "" :
                    data.campany = campany

            X = request.form.get('X')
            if not data.SNS_X == X:
                if not X == "" :
                    data.SNS_X = X

            You = request.form.get('You')
            if not data.SNS_You == You:
                if not You == "" :
                    data.SNS_You = You

            Ins = request.form.get('Ins')
            if not data.SNS_Ins == Ins:
                if not Ins == "" :
                    data.SNS_Ins = Ins

            text = request.form.get('text')
            if not data.text == text:
                if not text == "" :
                    data.text = text

            file = request.files['file']
            if not file.filename == '':
                filepath = './apps/static/Image/Icon/'
                file.save(os.path.join(filepath + file.filename))
                data.icon = file.filename

        elif buttons == "送信" :
            Image = request.files['Image']
            if not Image.filename == '':
                filepath = './apps/static/Image/Blog/'
                Image.save(os.path.join(filepath + Image.filename))

            title = request.form.get('title')
            texts = request.form.get('texts')

            Blogs = Blog(user = user_data.id, image = Image.filename, title = title, text = texts)
            db.session.add(Blogs)
        db.session.commit()
        return redirect("/profile")

    head = render_template("head.html")
    header = render_template("header.html")
    footer = render_template("footer.html")

    Blog_data = Blog.query.filter_by(user = user_data.id).all()


    color_bg_blue("/plofile")
    return render_template('profile.html',
    name=current_user.name, data = data.data, icon = data.icon, campany = data.campany, Profile_text = data.text, X = data.SNS_X, You = data.SNS_You, Ins = data.SNS_Ins,
    head = head, header = header, footer = footer, blog_data = Blog_data)


@main.route('/search')
def search():
    header = render_template("header.html")
    footer = render_template("footer.html")

    color_bg_blue("/search")
    return render_template('search.html', header = header, footer = footer)


@main.route("/item", methods=["GET", "POST"])
@login_required
def item():

    user_data = current_user
    user = User.query.filter_by(email = user_data.email).first()

    head = render_template("head.html")
    header = render_template("header.html")

    if request.method == "POST":
        item_type = request.form.get('item_type')
        item_name = request.form.get('name')
        item_manufacturer = request.form.get('manufacturer')
        item_category = request.form.get('category')
        item_price = request.form.get('price')
        if item_type is None or item_category is None or item_name is None or item_manufacturer is None or item_price is None :
            return redirect("/item")

        if item_type == "CPU":
            item_socket = request.form.get('socket')
            item_thread = request.form.get('thread')
            item_core = request.form.get('core')
            item_P_core = request.form.get('P_core')
            item_E_core = request.form.get('E_core')
            item_clock = request.form.get('clock')
            item_GPU = request.form.get('GPU')
            item_wat = request.form.get('wat')

            if  not item_socket  or not item_thread  or not item_core or not item_P_core or not item_E_core or not item_clock or not item_GPU or not item_wat:
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, socket = item_socket, thread = item_thread, core = item_core, P_core = item_P_core, E_core = item_E_core, clock = item_clock, GPU = item_GPU, wat = item_wat, price = item_price)

        elif item_type == "CPU_cooler":
            item_socket = request.form.get('socket')
            item_noise = request.form.get('noise')

            if not item_socket or not item_noise :
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, socket = item_socket,
            noise = item_noise, price = item_price)

        elif item_type == "GPU":
            item_standard = request.form.get('standard')
            item_capacity = request.form.get('capacity')
            item_wat = request.form.get('wat')

            if not item_standard or not item_wat :
                return redirect("/item")


            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, standard = item_standard, capacity = item_capacity, wat = item_wat, price = item_price)

        elif item_type == "RAM":
            item_standard = request.form.get('standard')
            item_capacity = request.form.get('capacity')

            if not item_standard or not item_capacity :
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, standard = item_standard,
            capacity = item_capacity, price = item_price)

        elif item_type == "ROM":
            item_standard = request.form.get('standard')
            item_capacity = request.form.get('capacity')

            if not item_standard or not item_capacity :
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, standard = item_standard,
            capacity = item_capacity, price = item_price)

        elif item_type == "case":
            item_standard = request.form.get('standard')

            if not item_standard :
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, standard = item_standard,
             price = item_price)

        elif item_type == "motherboard":
            item_socket = request.form.get('socket')
            item_chip_set = request.form.get('chip_set')

            if not item_socket or not item_chip_set :
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, socket = item_socket,
            chip_set = item_chip_set, price = item_price)

        elif item_type == "power":
            item_standard = request.form.get('standard')
            item_capacity = request.form.get('capacity')

            if not item_standard or not item_capacity :
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, standard = item_standard,
            capacity = item_capacity, price = item_price)
        elif item_type == "BTOPC":
            if not item_standard or not item_capacity :
                return redirect("/item")

            new_item = Item(name = item_name, manufacturer = item_manufacturer, category = item_category, standard = item_standard,
            capacity = item_capacity, price = item_price)
        else :
            return redirect("/item")


        db.session.add(new_item)
        db.session.commit()

        return redirect("/item")

    if user.email == "mikita@mikita.mi":
        color_bg_blue("/item")
        return render_template('item.html', head = head, header = header)

    else:
        return abort(403)


@main.route("/make_bto", methods=["GET"])
def make_bto():
    head = render_template("head.html")
    header = render_template("header.html")

    Item_data = Item.query.all()

    for Item_list in Item_data:
        if Item_list.category == "Motherboard":
            motherboard = Item.query.filter(Item.category == 'Motherboard').all()

        if Item_list.category == "CPU":
            cpu = Item.query.filter(Item.category == 'CPU').all()

        if Item_list.category == "GPU":
            gpu = Item.query.filter(Item.category == 'GPU').all()

        if Item_list.category == "RAM":
            ram = Item.query.filter(Item.category == 'RAM').all()

        if Item_list.category == "ROM":
            rom = Item.query.filter(Item.category == 'ROM').all()

        if Item_list.category == "Power_source":
            power_source = Item.query.filter(Item.category == 'Power_source').all()

        if Item_list.category == "Case":
            case = Item.query.filter(Item.category == 'Case').all()

    print(Item_list.category)
    color_bg_blue("/make_bto")
    return render_template('make_bto.html', head = head, header = header, motherboard = motherboard, cpu = cpu, gpu = gpu, ram = ram, rom = rom, power_source = power_source, case = case)


@main.route("/make_bto", methods=["POST"])
@login_required
def make_bto_post():
    user_data = current_user
    user = User.query.filter_by(email = user_data.email).first()
    carts_data = request.form.get('data')
    split_list = carts_data.split('/')
    for name in split_list :
        items = Item.query.filter_by(name = name).first()

        cart_item = Cart(user = user.id, item = items.id)

        db.session.add(cart_item)

    db.session.commit()



    return redirect("/cart")


@main.route("/cart", methods=["GET", "POST"])
@login_required
def cart():
    user_data = current_user

    if request.method == "POST":
        data = request.form.get('cart')
        print(data)
        if not data is None:
            if data == "全てを削除する":
                items = Cart.query.filter_by(user = user_data.id).all()
                for i in items:
                    Delete = Cart.query.filter_by(user = user_data.id).first()
                    print("aaaa",Delete.item)
                    db.session.delete(Delete)
            elif data == "購入の手続きへ進む":
                items = Cart.query.filter_by(user = user_data.id).all()
                print(items)
                if not len(items) == 0:
                    return redirect("/purchase")
                else:
                    return redirect("/cart")

            else:
                Delete  = Cart.query.filter(Cart.item == data, Cart.user == user_data.id).first()
                db.session.delete(Delete)

            db.session.commit()
            return redirect("/cart")
        return redirect("/")

    head = render_template("head.html")
    header = render_template("header.html")
    footer = render_template("footer.html")
    user_data = current_user
    items = Cart.query.filter_by(user = user_data.id).all()
    items_list = []
    cart_id = []
    all_price = 0
    for i in items:
        cart_id.append(i)
        item_list = Item.query.filter_by(id = i.item).first()
        all_price = all_price + int(item_list.price)
        items_list.append(item_list)

    color_bg_blue("/cart")
    return render_template('cart.html',items = items_list, head = head, header = header, footer = footer, cart_id = cart_id, all_price = all_price)

@main.route("/purchase", methods=["GET", "POST"])
@login_required
def purchase():
    print("!01")

    user_data = current_user
    if request.method == "POST":
        print("!1")
        email = request.form.get('email')
        tel = request.form.get('telephone')
        campany = request.form.get('campany')
        post_code = request.form.get('post_code')
        area = request.form.get('area')
        city = request.form.get('city')
        address1 = request.form.get('address1')
        address2 = request.form.get('address2')

        data = request.form.get('Buy_button')

        if data == "住所を登録して購入する":
            print("!2")

            user = Data.query.filter_by(id = user_data.id).first()
            user.telephone = tel
            user.campany = campany
            user.post_code = post_code
            user.country = "日本"
            user.region = area
            user.city = city
            user.address1 = address1
            user.address2 = address2

            db.session.commit()
        items = Cart.query.filter_by(user = user_data.id).all()

        for i in items:
            print("!3")

            import datetime

            now_time = datetime.date.today()
            Bay = Cart.query.filter_by(user = user_data.id).first()
            bay_item = Purchase_history(user = user.id, item_id = Bay.id, email = email, day_time = now_time, telephone = tel, campany = campany, post_code = post_code, country = "日本", region = area, city = city, address1 = address1, address2=address2)
            db.session.add(bay_item)
            db.session.delete(Bay)


        db.session.commit()
        print("!4")

        return redirect("/")
    head = render_template("head.html")
    header = render_template("header.html")


    return render_template("purchase.html", head = head, header = header, Email = user_data.email)

@main.route("/question")
def question():
    head = render_template("head.html")
    header = render_template("header.html")
    footer = render_template("footer.html")
    color_bg_blue("/question")
    return render_template('question.html', head = head, header = header, footer = footer)



@main.route("/contact", methods = ["GET"])
def contact():

    color_bg_blue("/contact")
    return render_template("contact.html")




@main.route("/mikita", methods = ["GET"])

def home():
    head = render_template("head.html")
    header = render_template("header.html")
    footer = render_template("footer.html")
    image = "static/mikita/Image/mikita.png"

    color_bg_blue("/mikita")
    return render_template("mikita/index.html", head = head, header = header, footer = footer, image = image)


@main.route("/mikita", methods = ["POST"])
def data():
    head = render_template("head.html")
    header = render_template("header.html")
    footer = render_template("footer.html")
    your_name = request.form["name"]

    color_bg_blue("/mikita")
    return render_template("mikita/data.html", head = head, header = header, footer = footer, result=your_name)

# 検索用
@main.route("/searched", methods=["GET", "POST"])
def searched():
    if request.method == "POST":
        req1 = request.form.get('search')
        head = render_template("head.html")
        header = render_template("header.html")
        footer = render_template("footer.html")
        color_bg_blue("/searched")

        if req1 and len(req1.strip()) > 0:
            print(req1)
            items = db.session.query(Item).filter(or_(Item.name.like('%' + req1 + '%'), Item.manufacturer.like('%' + req1 + '%'), Item.category.like('%' + req1 + '%'))).distinct().all()
            if not items:
                info = "検索結果がありません"
            else:
                info = f'{req1}の検索結果'
            return render_template('searched.html', head=head, header=header, footer = footer, items=items, info=info)
    else:
        items = Item.query.all()
        head = render_template("head.html")
        header = render_template("header.html")
        return render_template('searched.html', head=head, header=header, items=items)



@main.route("/make_bto_s",methods=["GET"])
def make_bto_s():
    head = render_template("head.html")
    header = render_template("header.html")
    footer = render_template("footer.html")
    items = Item.query.all()
    pt1 = db.session.query(Btoitem).filter(Btoitem.id == 4).distinct().all()
    pt2 = db.session.query(Btoitem).filter(Btoitem.id == 3).distinct().all()
    pt3 = db.session.query(Btoitem).filter(Btoitem.id == 2).distinct().all()
    pt4 = db.session.query(Btoitem).filter(Btoitem.id == 1).distinct().all()
    color_bg_blue("/make_bto_s")
    return render_template('make_bto_s.html', head = head, header = header, footer = footer, items = items,pt1 = pt1,pt2 = pt2,pt3 = pt3,pt4 = pt4)


@main.route("/make_bto_s",methods=["POST"])
@login_required
def make_bto_s_post():
    user_data = current_user
    btos = request.form.get('bto')
    print(btos)

    items = Item.query.filter_by(name = btos).first()

    cart_item = Cart(user = user_data.id, item = items.id)

    db.session.add(cart_item)
    db.session.commit()

    print(btos)
    return redirect("/cart")
