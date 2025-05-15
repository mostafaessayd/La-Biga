
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
    console.log(List);
}

getMenu();