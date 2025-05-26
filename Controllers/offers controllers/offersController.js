// set color of selected button
document.getElementById('offers').style.color = 'white';
document.getElementById('offers-text').style.color = 'white';
document.getElementById('offers').style.backgroundColor = 'black';
document.getElementById('offers-text').style.backgroundColor = 'black';
//document.getElementById('button-of-add-new-offer').textContent = `<h3>${BUTTON_OF_ADD_OFFERS}</h3>`;
document.getElementById('products-number-in-offer').placeholder = PLACEHOLDER_OF_NUMBER_PRODUCTS_INPUT_IN_ADD_OFFER;
document.getElementById('add-product-in-offer-button').textContent = ADD_PRODUCT_IN_OFFER_BUTTON;
document.getElementById('back-to-show-offers-button').textContent = BACK_TO_SHOW_OFFERS_PAGE_BUTTON;
document.getElementById('name-of-offer').placeholder = PLACEHOLDER_OF_NAME_INPUT_IN_ADD_OFFER;
document.getElementById('price-of-offer').placeholder = PLACEHOLDER_OF_PRICE_INPUT_IN_ADD_OFFER;
document.getElementById('confirm-add-offer-button').value = CONFIRM_ADD_OFFER_BUTTON;
document.getElementById('ignore-add-offer-button').value = IGNORE_ADD_OFFER_BUTTON;

// generate an innert html of add offer option
function generateCardOfAddOffer() {
    generateSelectOfAvailableCategoriesInAddOffer();
    generateSelectOfAvailableProductsInAddOfferOf("");
}


// get list of product from data base and select the categories
async function getListOfCategories() {
    const response = await fetch('../../../Data/get data/getCategories.php');
    const data = await response.json();
    return data;
}

// generate select of available categories in add product action
async function generateSelectOfAvailableCategoriesInAddOffer() {
    var List = await getListOfCategories();
    var page = `<select id="select-categories-in-add-offer" name="category" onchange="setSelectOfProductsInAddOffer()">
    <option value="" disabled selected hidden>${PLACEHOLDER_OF_INPUT_CATEGORY}</option>`;
    for (let i = 0; i < List.length; i++) {
        page += `<option value="${List[i].name}">${List[i].name}</option>`;
    }
    page += `</select>`;
    document.getElementById('part-of-select-category-in-add-new-offer').innerHTML = page;
}

async function getListOfProduct() {
    const response = await fetch('../../../Data/getMenu.php');
    const data = await response.json();
    return data;
}

async function generateSelectOfAvailableProductsInAddOfferOf(name) {
    if (name == "") {
        var page = `<select id="select-product-in-add-offer" name="product">
    <option value="" disabled selected hidden>${PLACEHOLDER_OF_INPUT_PRODUCT}</option>`;
        page += `</select>`;
        document.getElementById('part-of-select-product-in-add-new-offer').innerHTML = page;
        return;
    }
    var List = await getListOfProduct();
    var page = `<select id="select-product-in-add-offer" name="product">
    <option value="" disabled selected hidden>${PLACEHOLDER_OF_INPUT_PRODUCT}</option>`;
    for (let i = 0; i < List.length; i++) {
        if (List[i].name != name) {
            continue;
        }
        page += `<option value="${List[i].product_name}">${List[i].product_name}</option>`;
    }
    page += `</select>`;
    document.getElementById('part-of-select-product-in-add-new-offer').innerHTML = page;
}

generateCardOfAddOffer();

function setSelectOfProductsInAddOffer() {
    var selectedValue = document.getElementById('select-categories-in-add-offer').value;
    generateSelectOfAvailableProductsInAddOfferOf(selectedValue);
}

var listOfProducts = [];
var textOfAvailableoffer = "";
function addProductIntoOffer() {
    var productName = document.getElementById('select-product-in-add-offer').value;
    var numberOfProduct = document.getElementById('products-number-in-offer').value;
    listOfProducts.push({ numberOfProduct: numberOfProduct, productName: productName });
    var page = document.getElementById('available-product-in-offer').innerHTML;
    textOfAvailableoffer += "#";
    textOfAvailableoffer += numberOfProduct + "";
    textOfAvailableoffer += "-";
    textOfAvailableoffer += productName + "";
    document.getElementById('available-product-in-offer-hidden-value').value = textOfAvailableoffer;
    page += `
    <div class="container-of-single-product-in-available-product-in-offer">
                                <div class="product-in-offer">
                                    <div class="part-of-name-in-container-of-single-product-in-available-product-in-offer">
                                        ${numberOfProduct} ${productName}
                                    </div>
                                    <div onclick="deleteProductFromOffer(${listOfProducts.length - 1})" class="part-of-delete-in-container-of-single-product-in-available-product-in-offer">
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
    `;
    document.getElementById('available-product-in-offer').innerHTML = page;
}

function deleteProductFromOffer(id) {
    var newProducts = [];
    var page = ``;
    let j = 0;
    var newText = "";
    for (let i = 0; i < listOfProducts.length; i++) {
        if (i == id) {
            continue;
        }
        newText += "#";
        newText += listOfProducts[i].numberOfProduct + "";
        newText += "-";
        newText += listOfProducts[i].productName + "";
        newProducts.push(listOfProducts[i]);
        page += `
    <div class="container-of-single-product-in-available-product-in-offer">
                                <div class="product-in-offer">
                                    <div class="part-of-name-in-container-of-single-product-in-available-product-in-offer">
                                        ${listOfProducts[i].numberOfProduct} ${listOfProducts[i].productName}
                                    </div>
                                    <div onclick="deleteProductFromOffer(${j++})" class="part-of-delete-in-container-of-single-product-in-available-product-in-offer">
                                        <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
    `;
    }
    listOfProducts = newProducts;
    textOfAvailableoffer = newText;
    document.getElementById('available-product-in-offer-hidden-value').value = textOfAvailableoffer;
    document.getElementById('available-product-in-offer').innerHTML = page;
}

// got to page of add new offer
function goToAddNewOfferPage() {
    document.getElementById('container-of-show-offers').style.display = 'none';
    document.getElementById('contaier-of-form-of-add-new-offer').style.display = 'flex';
}

function backToShowOffersPage() {
    document.getElementById('container-of-show-offers').style.display = 'flex';
    document.getElementById('contaier-of-form-of-add-new-offer').style.display = 'none';
}

// fetch the list of curent offers from database
async function getListOfCurrentOffers() {
    const response = await fetch("../../../Data/get data/getCurrentOffers.php");
    var date = response.json();
    return date;
}

async function generateListOfCurrentOffers() {
    var list = await getListOfCurrentOffers();
    var page = ``;
    var i = 0;
    for (; i < list.length; i++) {
        if (i + 3 > list.length) {
            break;
        }
        page += `<div class="container-of-single-row-in-offers">`;
        // show first offer 
        var L = decodeListOfAvailableProducts(list[i].available_offers);
        var availableList = getInnerHTMLOf(L);
        page += `
        <div class="container-of-card-of-show-offer">
            <div class="top-part-in-container-of-card-of-show-offer">
                <div class="name-of-offer-in-card-of-show-offer"><h3>${list[i].name}</h3></div>
                <div class="price-of-offer-in-card-of-show-offer"><h3>${list[i].price} DA</h3></div>
            </div>
            <div class="middle-part-in-container-of-card-of-show-offer">${availableList}</div>
            <div class="bottom-part-in-container-of-card-of-show-offer"></div>
        </div>
        `;

        // show second offer
        i++;
        L = decodeListOfAvailableProducts(list[i].available_offers);
        availableList = getInnerHTMLOf(L);
        page += `
        <div class="container-of-card-of-show-offer">
            <div class="top-part-in-container-of-card-of-show-offer">
                <div class="name-of-offer-in-card-of-show-offer"><h3>${list[i].name}</h3></div>
                <div class="price-of-offer-in-card-of-show-offer"><h3>${list[i].price} DA</h3></div>
            </div>
            <div class="middle-part-in-container-of-card-of-show-offer">${availableList}</div>
            <div class="bottom-part-in-container-of-card-of-show-offer"></div>
        </div>
        `;

        // show third offer
        i++;
        L = decodeListOfAvailableProducts(list[i].available_offers);
        availableList = getInnerHTMLOf(L);
        page += `
        <div class="container-of-card-of-show-offer">
            <div class="top-part-in-container-of-card-of-show-offer">
                <div class="name-of-offer-in-card-of-show-offer"><h3>${list[i].name}</h3></div>
                <div class="price-of-offer-in-card-of-show-offer"><h3>${list[i].price} DA</h3></div>
            </div>
            <div class="middle-part-in-container-of-card-of-show-offer">${availableList}</div>
            <div class="bottom-part-in-container-of-card-of-show-offer"></div>
        </div>
        `;
        page += `</div>`;
    }

    // filling the last part
    l = 2 - list.length % 3;
    page += `<div class="container-of-single-row-in-offers">`;
    while (l-- > 0) {
        page += `<div class="hidden-card-in-offers"></div>`;
    }
    page += `
                        <div class="card-of-add-offer" onclick="goToAddNewOfferPage()">
                        <div class="top-part-of-card-of-add-offer"></div>
                        <div class="middle-part-of-card-of-add-offer"></div>
                        <div class="bottom-part-of-card-of-add-offer" id="button-of-add-new-offer"></div>
                    </div>
    `;
    for (; i < list.length; i++) {
        L = decodeListOfAvailableProducts(list[i].available_offers)
        availableList = getInnerHTMLOf(L);
        page += `
                        <div class="container-of-card-of-show-offer">
                        <div class="top-part-in-container-of-card-of-show-offer">
                            <div class="name-of-offer-in-card-of-show-offer"><h3>${list[i].name}</h3></div>
                            <div class="price-of-offer-in-card-of-show-offer"><h3>${list[i].price} DA</h3></div>
                        </div>
                        <div class="middle-part-in-container-of-card-of-show-offer">${availableList}</div>
                        <div class="bottom-part-in-container-of-card-of-show-offer"></div>
                    </div>
        `;
    }
    page += `</div>`;

    document.getElementById('container-of-show-offers').innerHTML = page;
}

//generateListOfCurrentOffers();
// decode list of available products from database
function decodeListOfAvailableProducts(encodedString) {
    var decodedList = [];
    for (let i = 1; i < encodedString.length;) {
        var t = "";
        while (i < encodedString.length && encodedString[i] != '#') {
            t += encodedString[i];
            i++;
        }
        i++;
        decodedList.push(t);
    }
    return decodedList;
}

// convert decoded aailable list into innerhtml 
function getInnerHTMLOf(list) {
    var page = `<ul>`;
    for (let i = 0; i < list.length; i++) {
        page += `<li><h4>${list[i]}</h4></li>`
    }
    page += `</li>`;
    return page;
}