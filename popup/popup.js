
function setIsBanEnabled(checkboxElem) {
    if (checkboxElem.currentTarget.checked) {
        chrome.storage.sync.set({ isBanEnabled: true });

    } else {
        chrome.storage.sync.set({ isBanEnabled: false });
    }
}

function getLatestNewsList() {
    fetch('https://raw.githubusercontent.com/osmanraifgunes/haber-sitelerini-engelle/main/sites.json')
        .then((resp) => resp.json())
        .then(function (jsonData) {
            chrome.storage.sync.set({ clickBaitslist: jsonData });
        });
}

window.addEventListener("DOMContentLoaded", (event) => {
    getLatestNewsList();

    document.getElementById("chkIsBanEnabled").addEventListener("change", setIsBanEnabled);
    
    chrome.storage.sync.get('isBanEnabled').then((isBanEnabled) => {
        document.getElementById("chkIsBanEnabled").checked = isBanEnabled.isBanEnabled;
    });
});



