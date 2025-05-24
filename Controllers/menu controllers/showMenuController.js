
// set color of selected button
document.getElementById('menu').style.color = 'white';
document.getElementById('menu-text').style.color = 'white';
document.getElementById('menu').style.backgroundColor = 'black';
document.getElementById('menu-text').style.backgroundColor = 'black';


var List = [];

async function getListOfProduct() {
    const response = await fetch('../../../../Data/getMenu.php');
    const data = await response.json();
    return data;
}

async function getMenu() {
    List = await getListOfProduct();
    var categories = [];
    for (let i = 0; i < List.length; i++) {
        var find = false;
        for (let j = 0; j < categories.length; j++) {
            if (categories[j] == List[i].name) {
                find = true;
                break;
            }
        }
        if (find) {
            continue;
        }
        categories.push(List[i].name);
    }

    var page = ``;
    for (let i = 0; i < categories.length; i++) {
        page += `<div class="container-of-category-in-show-menu">
        <div class="container-of-single-category-in-show-menu">
        <div class="name-of-category-in-show-menu"><h2>${categories[i]}</h2></div>`;
        for (let j = 0; j < List.length; j++) {
            if (List[j].name == categories[i]) {
                page += `<div class="available-product-in-category-in-show-menu">
                <div class="type-in-category-in-show-menu"><h4>${List[j].product_name}</h4></div>
                <div class="price-of-type-in-category-in-show-menu"><h4>${List[j].price} DA</h4></div>
                </div>`;
            }
        }
        page += `<div class="tail-of-container-of-single-category-in-show-menu"></div>`;
        page += `</div></div>`;
    }

    // alert('pp');
    document.getElementById('show-menu').innerHTML = page;
}

getMenu();