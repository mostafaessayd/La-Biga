
// set color of selected button
document.getElementById('menu').style.color = 'white';
document.getElementById('menu-text').style.color = 'white';
document.getElementById('menu').style.backgroundColor = 'black';
document.getElementById('menu-text').style.backgroundColor = 'black';
document.getElementById('button-of-add-category').innerHTML = `<h3>${ADD_CATEGORY_BUTTON}</h3>`;
document.getElementById('button-of-ignore-category').innerHTML = `<h3>${IGNORE_CATEGORY_BUTTON}</h3>`;
document.getElementById('button-of-go-to-add-product-card').innerHTML = `<h3>${GO_TO_ADD_PRODUCT_BUTTON}</h3>`;
document.getElementById('button-of-add-product').innerHTML = `<h3>${GO_TO_ADD_PRODUCT_BUTTON}</h3>`;
document.getElementById('button-of-ignore-product').innerHTML = `<h3>${IGNORE_CATEGORY_BUTTON}</h3>`;
document.getElementById('button-of-go-to-add-category-card').innerHTML = `<h3>${ADD_CATEGORY_BUTTON}</h3>`;
document.getElementById('add-category-name').placeholder = PLACEHOLDER_OF_INPUT_CATEGORY; 
document.getElementById('product_name').placeholder = PLACEHOLDER_OF_INPUT_PRODUCT;
document.getElementById('price').placeholder = PLACEHOLDER_OF_INPUT_PRICE; 

async function convertCardIntoAddProduct() {
    document.getElementById('add-category-form').style.display = 'none';
    document.getElementById('add-product-form').style.display = 'flex';
    await generateSelectOfAvailableCategoriesInAddProduct();
}

function convertCardIntoAddCategory() {
    document.getElementById('add-category-form').style.display = 'flex';
    document.getElementById('add-product-form').style.display = 'none';
}

// get list of product from data base and select the categories
async function getListOfCategories() {
    const response = await fetch('../../../../Data/get data/getCategories.php');
    const data = await response.json();
    return data;
}

// generate select of available categories in add product action
async function generateSelectOfAvailableCategoriesInAddProduct() {
    var List = await getListOfCategories();
    var page = `<select id="select-categories-in-add-product" name="category">
    <option value="" disabled selected hidden>${PLACEHOLDER_OF_INPUT_CATEGORY}</option>`;
    for(let i = 0 ; i < List.length ; i++) {
        page += `<option value="${List[i].name}">${List[i].name}</option>`;
    }
    page += `</select>`;
    document.getElementById('select-categories-in-add-product').innerHTML = page;
}