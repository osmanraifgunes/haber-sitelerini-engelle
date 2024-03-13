
function setIsBanEnabled(checkboxElem) {
    if (checkboxElem.currentTarget.checked) {
        chrome.storage.sync.set({ isBanEnabled: true });

    } else {
        chrome.storage.sync.set({ isBanEnabled: false });
    }
}

window.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("chkIsBanEnabled").addEventListener("change", setIsBanEnabled);
    chrome.storage.sync.get('isBanEnabled').then((isBanEnabled) => {
        document.getElementById("chkIsBanEnabled").checked = isBanEnabled.isBanEnabled;
    });
});