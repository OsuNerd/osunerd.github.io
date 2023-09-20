// apply translation on page loading
document.addEventListener('DOMContentLoaded', () => {
    let locale = getLocale();
    changeLanguage(locale)
});

function changeLanguageButtonClick(lang){
    let locale = getLocale();

    if(lang !== locale){
        sessionStorage.lang = lang;
        changeLanguage(lang);
    }
}

function changeLanguage(locale) {
    // getting localized elements
    document.querySelectorAll(`[data-key]`).forEach(element => {
        let key = element.getAttribute('data-key');
        // console.log(element);
        // console.log(key);
        let lang = locale.slice(0, 2); // first 2 characters
        if (key) {
            // inserting data
            element.innerHTML = localizationData.languages[lang].strings[key];
        }
    });
}

function getLocale(){
    let lang = sessionStorage.lang; // getting previously saved locale

    console.log(lang);
    if(lang === undefined){ // checking if we saved locale before
        lang = findLocaleMatch() // getting it from browser/default
    }

    return lang;
}

function findLocaleMatch() {
    let keys = Object.keys(localizationData.languages); // from our translation data
    let locales = keys.map(key => {
        return key.slice(0,2);
    }); // from our data validated

    let lang = navigator.language; // from browser
    let locale = lang.slice(0-2); // from browser validated
    // console.log('browser language', lang);
    // console.log('locales from data file', locale);

    // find the match for locale inside locales
    let langMatch = document.documentElement.getAttribute('lang'); //default
    locales = locales.filter(l => locale === l);
    langMatch = (locales.length > 0) ? locales[0] : langMatch;

    sessionStorage.lang = langMatch;

    return langMatch;
}