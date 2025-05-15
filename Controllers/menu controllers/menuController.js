// set color of selected button
document.getElementById('menu').style.color = 'white';
document.getElementById('menu-text').style.color = 'white';
document.getElementById('menu').style.backgroundColor = 'black';
document.getElementById('menu-text').style.backgroundColor = 'black';
document.getElementById('show-menu-button').innerHTML = `<h2>${SHOW_MENU_BUTTON}</h2>`;
document.getElementById('edit-menu-button').innerHTML = `<h2>${EDIT_MENU_BUTTON}</h2>`;

function showMenu() {
    location.href = './show menu/';
}