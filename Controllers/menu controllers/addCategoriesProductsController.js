
// set color of selected button
document.getElementById('menu').style.color = 'white';
document.getElementById('menu-text').style.color = 'white';
document.getElementById('menu').style.backgroundColor = 'black';
document.getElementById('menu-text').style.backgroundColor = 'black';
document.getElementById('button-of-add-category').innerHTML = `<h3>${ADD_CATEGORY_BUTTON}</h3>`;
document.getElementById('button-of-ignore-category').innerHTML = `<h3>${IGNORE_CATEGORY_BUTTON}</h3>`;
document.getElementById('button-of-go-to-add-product-card').innerHTML = `<h3>${GO_TO_ADD_PRODUCT_BUTTON}</h3>`;

function f() {
    alert("ggg");
}