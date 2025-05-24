// change varibale texts according to the selected language
function initTextsLanguage() {
    var language = "anglais";
    switch (language) {
        case "arabic": setLanguageIntoArabic(); break;
        case "anglais": setLanguageIntoEnglish(); break;
    }
}

// set features texts
function setFeaturesTexts() {
    document.getElementById('menu-text').textContent = MENU;
    document.getElementById('orders-text').textContent = ORDERS;
    document.getElementById('settings-text').textContent = SETTINGS;
    document.getElementById('tirelire-text').textContent = TIRELIRE;
    document.getElementById('expenses-text').textContent = EXPENSES;
    document.getElementById('profile-text').textContent = PROFILE;
    document.getElementById('offers-text').textContent = OFFERS;
}

initTextsLanguage();
setFeaturesTexts();