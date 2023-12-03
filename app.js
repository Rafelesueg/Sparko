let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let resetShopping = document.querySelector('.resetShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
resetShopping.addEventListener('click', ()=>{
    body.classList.add('active');
    total.innerText = 0;
    listCards = [];
    reloadCard();
})

let products = [
    { id: 1, name: 'cavo da traino', price: 15, group: 'altro', importprice: 10, sellingprice: 15, buyingprice: 5 },
    { id: 2, name: 'motore 4 cilindri', price: 150, group: 'mecanic', importprice: 100, sellingprice: 150, buyingprice: 50 },
    { id: 3, name: 'motore 6 cilindri', price: 375, group: 'mecanic', importprice: 250, sellingprice: 375, buyingprice: 125 },
    { id: 4, name: 'motore v6', price: 450, group: 'mecanic', importprice: 300, sellingprice: 450, buyingprice: 150 },
    { id: 5, name: 'motore v8', price: 750, group: 'mecanic', importprice: 500, sellingprice: 750, buyingprice: 250 },
    { id: 6, name: 'motore v12', price: 900, group: 'mecanic', importprice: 600, sellingprice: 900, buyingprice: 300 },
    { id: 7, name: 'freni a tamburo', price: 15, group: 'mecanic', importprice: 8, sellingprice: 15, buyingprice: 4 },
    { id: 8, name: 'freni a disco', price: 15, group: 'mecanic', importprice: 10, sellingprice: 15, buyingprice: 5 },
    { id: 9, name: 'frani a disco in ceramica', price: 25, group: 'mecanic', importprice: 15, sellingprice: 25, buyingprice: 8 },
    { id: 10, name: 'freni a disco in carbonio-ceramica', price: 40, group: 'mecanic', importprice: 25, sellingprice: 40, buyingprice: 13 },
    { id: 11, name: 'trasmissione variaz continua', price: 100, group: 'mecanic', importprice: 65, sellingprice: 100, buyingprice: 30 },
    { id: 12, name: 'trasmissione doppia frizione', price: 105, group: 'mecanic', importprice: 70, sellingprice: 105, buyingprice: 35 },
    { id: 13, name: 'trasmissione variaz continua elettronica', price: 135, group: 'mecanic', importprice: 90, sellingprice: 135, buyingprice: 45 },
    { id: 14, name: 'trasmissione doppia frizione elettronica', price: 150, group: 'mecanic', importprice: 100, sellingprice: 150, buyingprice: 50 },
    { id: 15, name: 'batteria al piombo', price: 45, group: 'mecanic', importprice: 30, sellingprice: 45, buyingprice: 15 },
    { id: 16, name: 'batteria al litio', price: 75, group: 'mecanic', importprice: 50, sellingprice: 75, buyingprice: 25 },
    { id: 17, name: 'olio minerale', price: 60, group: 'mecanic', importprice: 40, sellingprice: 60, buyingprice: 20 },
    { id: 18, name: 'olio sintetico', price: 85, group: 'mecanic', importprice: 55, sellingprice: 85, buyingprice: 25 },
    { id: 19, name: 'olio a bassa viscosità', price: 105, group: 'mecanic', importprice: 70, sellingprice: 105, buyingprice: 35 },
    { id: 20, name: 'sospensione a balestra', price: 55, group: 'mecanic', importprice: 35, sellingprice: 55, buyingprice: 15 },
    { id: 21, name: 'sospensione indipendente', price: 60, group: 'mecanic', importprice: 40, sellingprice: 60, buyingprice: 20 },
    { id: 22, name: 'sospensioni ad aria', price: 90, group: 'mecanic', importprice: 60, sellingprice: 90, buyingprice: 30 },
    { id: 23, name: 'candele rame', price: 15, group: 'mecanic', importprice: 10, sellingprice: 15, buyingprice: 5 },
    { id: 24, name: 'candele platino', price: 45, group: 'mecanic', importprice: 30, sellingprice: 45, buyingprice: 15 },
    { id: 25, name: 'candele iridio', price: 40, group: 'mecanic', importprice: 25, sellingprice: 40, buyingprice: 10 },
    { id: 26, name: 'copertone di fabbrica', price: 30, group: 'mecanic', importprice: 20, sellingprice: 30, buyingprice: 10 },
    { id: 27, name: 'chiave inglese', price: 10, group: 'altro', importprice: 5, sellingprice: 10, buyingprice: 3 },
    { id: 28, name: 'pistola termica', price: 30, group: 'altro', importprice: 20, sellingprice: 30, buyingprice: 10 },
    { id: 29, name: 'vernice per veicoli', price: 30, group: 'altro', importprice: 20, sellingprice: 30, buyingprice: 10 },
    { id: 30, name: 'rottami', price: 2, group: 'altro', importprice: 1, sellingprice: 2, buyingprice: 1 },
    { id: 31, name: 'spugna', price: 10, group: 'altro', importprice: 5, sellingprice: 10, buyingprice: 10 },
    { id: 32, name: 'Riparazione carrozzeria', price: 40, group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' },
    { id: 33, name: 'Lucidatura e pulizia', price: 10, group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' },
    { id: 34, name: 'Riparazione motore o trasmissione ($2 per rottame usato)', price: '2', group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' },
    { id: 35, name: 'Cambio colore', price: 50, group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' },
    { id: 36, name: 'Trasporto veicolo con gancio di traino', price: 100, group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' },
    { id: 37, name: 'Cambio COMPLETO motore (BASE) Motore + Tramissione + Candele + Olio + Batteria', price: 370, group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' },
    { id: 38, name: 'Cambio COMPLETO Ciclistica (BASE) Copertoni + Freni + Sospensioni - X4', price: 400, group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' },
    { id: 39, name: 'Cambio COMPLETO motore (TOP V12) Motore + Tramissione + Candele + Olio + Batteria + Freni + Dischi', price: 1800, group: 'prestazioni', importprice: '', sellingprice: '', buyingprice: '' }
];

let info = [
    { id: 1, name: 'cavo da traino', price: 15, group: 'prezzi', importprice: 10, sellingprice: 15, buyingprice: 5 },
    { id: 2, name: 'motore 4 cilindri', price: 150, group: 'prezzi', importprice: 100, sellingprice: 150, buyingprice: 50 },
    { id: 3, name: 'motore 6 cilindri', price: 375, group: 'prezzi', importprice: 250, sellingprice: 375, buyingprice: 125 },
    { id: 4, name: 'motore v6', price: 450, group: 'prezzi', importprice: 300, sellingprice: 450, buyingprice: 150 },
    { id: 5, name: 'motore v8', price: 750, group: 'prezzi', importprice: 500, sellingprice: 750, buyingprice: 250 },
    { id: 6, name: 'motore v12', price: 900, group: 'prezzi', importprice: 600, sellingprice: 900, buyingprice: 300 },
    { id: 7, name: 'freni a tamburo', price: 15, group: 'prezzi', importprice: 8, sellingprice: 15, buyingprice: 4 },
    { id: 8, name: 'freni a disco', price: 15, group: 'prezzi', importprice: 10, sellingprice: 15, buyingprice: 5 },
    { id: 9, name: 'frani a disco in ceramica', price: 25, group: 'prezzi', importprice: 15, sellingprice: 25, buyingprice: 8 },
    { id: 10, name: 'freni a disco in carbonio-ceramica', price: 40, group: 'prezzi', importprice: 25, sellingprice: 40, buyingprice: 13 },
    { id: 11, name: 'trasmissione variaz continua', price: 100, group: 'prezzi', importprice: 65, sellingprice: 100, buyingprice: 30 },
    { id: 12, name: 'trasmissione doppia frizione', price: 105, group: 'prezzi', importprice: 70, sellingprice: 105, buyingprice: 35 },
    { id: 13, name: 'trasmissione variaz continua elettronica', price: 135, group: 'prezzi', importprice: 90, sellingprice: 135, buyingprice: 45 },
    { id: 14, name: 'trasmissione doppia frizione elettronica', price: 150, group: 'prezzi', importprice: 100, sellingprice: 150, buyingprice: 50 },
    { id: 15, name: 'batteria al piombo', price: 45, group: 'prezzi', importprice: 30, sellingprice: 45, buyingprice: 15 },
    { id: 16, name: 'batteria al litio', price: 75, group: 'prezzi', importprice: 50, sellingprice: 75, buyingprice: 25 },
    { id: 17, name: 'olio minerale', price: 60, group: 'prezzi', importprice: 40, sellingprice: 60, buyingprice: 20 },
    { id: 18, name: 'olio sintetico', price: 85, group: 'prezzi', importprice: 55, sellingprice: 85, buyingprice: 25 },
    { id: 19, name: 'olio a bassa viscosità', price: 105, group: 'prezzi', importprice: 70, sellingprice: 105, buyingprice: 35 },
    { id: 20, name: 'sospensione a balestra', price: 55, group: 'prezzi', importprice: 35, sellingprice: 55, buyingprice: 15 },
    { id: 21, name: 'sospensione indipendente', price: 60, group: 'prezzi', importprice: 40, sellingprice: 60, buyingprice: 20 },
    { id: 22, name: 'sospensioni ad aria', price: 90, group: 'prezzi', importprice: 60, sellingprice: 90, buyingprice: 30 },
    { id: 23, name: 'candele rame', price: 15, group: 'prezzi', importprice: 10, sellingprice: 15, buyingprice: 5 },
    { id: 24, name: 'candele platino', price: 45, group: 'prezzi', importprice: 30, sellingprice: 45, buyingprice: 15 },
    { id: 25, name: 'candele iridio', price: 40, group: 'prezzi', importprice: 25, sellingprice: 40, buyingprice: 10 },
    { id: 26, name: 'copertone di fabbrica', price: 30, group: 'prezzi', importprice: 20, sellingprice: 30, buyingprice: 10 },
    { id: 27, name: 'chiave inglese', price: 10, group: 'prezzi', importprice: 5, sellingprice: 10, buyingprice: 3 },
    { id: 28, name: 'pistola termica', price: 30, group: 'prezzi', importprice: 20, sellingprice: 30, buyingprice: 10 },
    { id: 29, name: 'vernice per veicoli', price: 30, group: 'prezzi', importprice: 20, sellingprice: 30, buyingprice: 10 },
    { id: 30, name: 'rottami', price: 2, group: 'prezzi', importprice: 1, sellingprice: 2, buyingprice: 1 },
    { id: 31, name: 'spugna', price: 10, group: 'prezzi', importprice: 5, sellingprice: 10, buyingprice: 10 }
];

let listCards  = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.setAttribute('data-group', value.group);
        newDiv.innerHTML = `
            <div class="title">${value.name}</div>
            <div class="text">Prezzo: $${value.price}</div>
            <input type="hidden" id="priceInput-${key}" value="${value.price}">
            <button onclick="addToCard(${key})">Aggiungi</button>`;
        list.appendChild(newDiv);
    });

    info.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.setAttribute('data-group', value.group);
        newDiv.innerHTML = `
        <div class="title">${value.name}</div>
        <div class="text">Prezzo Import: $${value.importprice}</div>
        <div class="text">Prezzo montaggio: $${value.sellingprice}</div>
        <div class="text">Prezzo acquisto dai clienti: $${value.buyingprice}</div>`;
        list.appendChild(newDiv);
    });

    filterByGroup();
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        listCards[key].originalPrice = parseFloat(document.getElementById(`priceInput-${key}`).value);
    }
    reloadCard();
}


function filterByGroup() {
    let groupDropdown = document.getElementById('groupDropdown');
    let selectedGroup = groupDropdown.value;

    Array.from(list.children).forEach((item) => {
        item.style.display = 'block';
    });

    if (selectedGroup !== 'all') {
        Array.from(list.children).forEach((item) => {
            let itemGroup = item.getAttribute('data-group').toLowerCase();

            if (itemGroup !== selectedGroup) {
                item.style.display = 'none';
            }
        });
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.quantity * value.originalPrice;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.name}</div>
                <div>$${value.originalPrice.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <input type="number" class="quantityInput" id="quantityInput-${key}" value="${value.quantity}">
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = "$" + totalPrice.toLocaleString();
    quantity.innerText = count;

    let quantityInputs = document.querySelectorAll('.quantityInput');
    quantityInputs.forEach((input) => {
        input.addEventListener('change', (event) => {
            let key = parseInt(event.target.id.split('-')[1]);
            let newQuantity = parseInt(event.target.value);
            changeQuantity(key, newQuantity);
        });
    });
}



function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * parseFloat(listCards[key].originalPrice);
    }
    reloadCard();
}

