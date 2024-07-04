document.addEventListener('DOMContentLoaded', function() {
    const storeForm = document.getElementById('store-form');
    const itemForm = document.getElementById('item-form');
    const itemList = document.getElementById('item-list');
    const addItemInputBtn = document.getElementById('add-item-input');
    const itemInputs = document.getElementById('item-inputs');
    const paymentForm = document.getElementById('payment-form');
    const paymentMethod = document.getElementById('payment-method');
    const cashPayment = document.getElementById('cash-payment');
    const paidAmount = document.getElementById('paid-amount');
    const changeAmount = document.getElementById('change-amount');

    storeForm.addEventListener('submit', handleStoreFormSubmit);
    itemForm.addEventListener('submit', handleItemFormSubmit);
    addItemInputBtn.addEventListener('click', addNewItemInput);

    paymentMethod.addEventListener('change', function() {
        if (this.value === 'cash') {
            cashPayment.style.display = 'block';
        } else {
            cashPayment.style.display = 'none';
        }
    });

    paidAmount.addEventListener('input', function() {
        const total = parseFloat(document.querySelector('.item-table tfoot td:last-child').textContent);
        const paid = parseFloat(this.value) || 0;
        const change = paid - total;
        changeAmount.textContent = `おつり: ${change.toFixed(0)}円`;
    });

    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch('/set_payment', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('支払情報が設定されました。');
            }
        });
    });

    attachEventListeners();
});

function handleStoreFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(html => {
        document.body.innerHTML = html;
        attachEventListeners();
    });
}

function handleItemFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('/add_item', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('item-list').innerHTML = data.html;
            attachEventListeners();
            clearItemInputs();
        }
    });
}

function attachEventListeners() {
    const storeForm = document.getElementById('store-form');
    const itemForm = document.getElementById('item-form');
    const addItemInputBtn = document.getElementById('add-item-input');

    storeForm.addEventListener('submit', handleStoreFormSubmit);
    itemForm.addEventListener('submit', handleItemFormSubmit);
    addItemInputBtn.addEventListener('click', addNewItemInput);

    const deleteButtons = document.querySelectorAll('.delete-item');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            fetch(`/delete_item/${itemId}`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('item-list').innerHTML = data.html;
                    attachEventListeners();
                }
            });
        });
    });

    const removeItemInputButtons = document.querySelectorAll('.remove-item-input');
    removeItemInputButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (document.querySelectorAll('.item-input').length > 1) {
                this.closest('.item-input').remove();
            }
        });
    });
}

function clearItemInputs() {
    const inputs = document.querySelectorAll('#item-inputs .item-input');
    inputs.forEach((input, index) => {
        if (index === 0) {
            input.querySelectorAll('input').forEach(i => i.value = '');
        } else {
            input.remove();
        }
    });
}

function addNewItemInput() {
    const newInput = document.createElement('div');
    newInput.className = 'item-input';
    newInput.innerHTML = `
        <input type="text" name="item_name[]" placeholder="商品名" required>
        <input type="number" name="item_price[]" placeholder="価格" step="0.01" required>
        <input type="number" name="item_quantity[]" placeholder="数量" required>
        <button type="button" class="remove-item-input" title="削除">×</button>
    `;
    document.getElementById('item-inputs').appendChild(newInput);
    attachEventListeners();
}