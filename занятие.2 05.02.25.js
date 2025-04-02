let listDOM = document.getElementById('list');
let inputName = document.getElementById('name');
let selectCategory = document.getElementById('category');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');
let inputDiscount = document.getElementById('discount');
let inputoplata = document.getElementById('oplata');
let inputDescription = document.getElementById('description');
let inputpv = document.getElementById('pv');
let form = document.getElementById('form');
let buttonAdd = document.getElementById('button-add');
let buttonEdit = document.getElementById('button-edit');
let titleAdd = document.getElementById('title-add')
let titleEdit = document.getElementById('title-edit')



let products = [];

// переменная для хранения индекса редактируемого товара
let currentEditProduct = null;

let categories = {
    'clothes': 'Одежда',
    'shoes':   'Обувь',
    'tools':   'Инструменты',
};

let specialsObj = {
    'bu':      'Б/У',
    'fragile': 'Хрупкое',
};
function editTovar(){
    event.preventDefault();

    let discountChoose = document.querySelector('input[name=discount]:checked');
    let oplataChoose = document.querySelector(`input[name=oplata]:checked`)
    let specialsValues = [];
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        specialsValues.push(specials[i].value);


        let product = {
            name: inputName.value,
            category: selectCategory.value,
            specials: specialsValues,
            description: inputDescription.value,
            pv: inputpv.value,
            discountChoose: discountChoose.value,
            discount: inputDiscount.value,
            price: inputPrice.value,
            count: inputCount.value,
            oplata: inputoplata.value,
            oplataChoose: oplataChoose.value,
        };
        let productIndex = products.push(product) - 1;

        addTovarCard(product, productIndex)
    }
}
    function discount(item) {
    let field = document.getElementById('discountDom');

    if (item) {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'flex', 'important');
    }
    else {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'none', 'important');
    }
}
    function oplata(item) {
    let field = document.getElementById('oplataDom');
    if (item) {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'flex', 'important');
    }
    else {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'none', 'important');
    }

}
function addTovar() {
    event.preventDefault();

    // находим активный радио-инпут, который выбран
    let discountChoose = document.querySelector('input[name=discount]:checked');
    let oplataChoose = document.querySelector(`input[name=oplata]:checked`)
    let specialsValues = [];
    let specials = document.querySelectorAll('input[name=specials]:checked');

    for (let i = 0; i < specials.length; i++) {
        specialsValues.push(specials[i].value);


        let product = {
            name: inputName.value,
            category: selectCategory.value,
            specials: specialsValues,
            description: inputDescription.value,
            pv: inputpv.value,
            discountChoose: discountChoose.value,
            discount: inputDiscount.value,
            price: inputPrice.value,
            count: inputCount.value,
            oplata: inputoplata.value,
            oplataChoose: oplataChoose.value,
        };
        let productIndex = products.push(product) - 1;

        addTovarCard(product, productIndex)
    }


    function addTovarCard(tovar, Index) {
        // создаем контейнер для товара
        let cardTovar = document.createElement('div');
        cardTovar.classList.add('tovar');



        let price = ``;


        if (tovar.discountChoose === 'true') {

            let disc = +tovar.price * +tovar.discount / 100;
            let newPrice = +tovar.price - disc;
            price = `<div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">${tovar.price} руб.</div>
                        <div>${newPrice} руб.</div>
                    </div>
                </div>`;
        } else {
            price = `<div class="tovar-price">Цена: ${tovar.price} руб.</div>`;
        }


        let specialsText = '';

        for (let i = 0; i < tovar.specials.length; i++) {
            specialsText += ' ' + specialsObj[tovar.specials[i]];
        }

        let card = `<div class="tovar-name">${tovar.name}</div>
            <div class="tovar-category">${categories[tovar.category]}</div>
            <div class="tovar-specials">Особенности: ${specialsText}</div>
            <div class="tovar-description">${tovar.description}</div>
             <div class="tovar-oplata">${tovar.oplata}</div>
            <div class="tovar-pv">${tovar.pv}</div>
            <div class="tovar-price-count">
                ${price}
                <div class="count">Количество: ${tovar.count} шт.</div>
            </div>
            <div class="tovar-close">X</div>
            <div class="tovar-edit">
            
            </div>`;

        cardTovar.innerHTML = card;
        listDOM.append(cardTovar);

        form.reset();
    }

// редактирование товара, открытие свойств товара в форме товара



// обновление товара в массиве товаров после его редактирования
     function edit(product)  {
         function edit(index) {
             titleAdd.classList.add('hide');
             titleEdit.classList.remove('hide');
             buttonAdd.classList.add('hide');
             buttonEdit.classList.remove('hide');

             let product = products[index];
             inputName.value = product.name;
             selectCategory.value = product.category;
             inputPrice.value = product.price;
             inputCount.value = product.count;
             inputDiscount.value = product.discount;
             inputDescription.value = product.description;
             inputoplata.value = product.oplata
             let discountChoose = document.querySelector(`input[name=discountChoose2][value=${ product.discountChoose }]`);
             discountChoose.checked = true;

             if (product.discountChoose == 'true') {
                 inputDiscountBody.classList.remove('hide')
             }

             for (let i = 0; i < product.specials.length; i++) {
                 let specialValue = product.specials[i]
                 let specials = document.querySelector(`input[name=specials][value=${ specialValue }]`);
                 specials.checked = true;
             }
         }

    }


// полностью очищаем список продуктов и строим его заново, вызывая функцию построения карточки товара
    function buildAgain() {
        listDOM.innerText = '';

        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            addTovarCard(product, i)
        }
    }
}