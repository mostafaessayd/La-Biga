// set color of selected button
document.getElementById('orders').style.color = 'white';
document.getElementById('orders-text').style.color = 'white';
document.getElementById('orders').style.backgroundColor = 'black';
document.getElementById('orders-text').style.backgroundColor = 'black';

// constant variabels in this page
var DASHBOARD_NAME;

async function setLanguage() {
    var response = await fetch("../../../Data/get data/getLanguage.php");
    var data = await response.json();
    // set language 
    switch(data[0].selectedLanguage) {
        case "arabic" : setLanguagetoArabic();break;
        case "english" : setLanguagetoEnglish();break;
    }
    // set texts from their ids
    document.getElementById("dashboard-title-in-part-of-name-in-head-of-dashboard-in-container-of-dashboard-of-orders").innerHTML = `<h2>${DASHBOARD_NAME}</h2>`;
}

setLanguage();

// functions of set language
function setLanguagetoArabic() {
    DASHBOARD_NAME = "الطلبيات";
}

function setLanguagetoEnglish() {
    DASHBOARD_NAME = "dashboard";
}