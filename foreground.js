var clickBaitslist = [
    'yenisafak.com',
    'hurriyet.com',
    'milliyet.com',
    'sabah.com',
    'dogruhaber.com',
    'haberturk.com',
    'haber7.com',
    'haberet.com',
    'haberler.com',
    'posta.com',
    'ensonhaber.com',
    'ahaber.com',
    't24.com',
    'odatv.com',
    '​veryansintv.com',
    'mynet.com',
    'sozcu.com',
    'sondakika.com',
    'yenicaggazetesi.com',
    'cumhuriyet.com',
    'onedio.com',
    'ntv.com',
    'fanatik.com',
    'takvim.com',
    'fotomac.com',
    'birgun.com',
    'cnnturk.com'
]


function clearClickBaits() {
    chrome.storage.sync.get('isBanEnabled').then((isBanEnabled) => {
        if (!isBanEnabled.isBanEnabled) {
            return;
        }
        var elements = [...document.querySelectorAll("#rso > div")];
        chrome.storage.sync.get('clickBaitslist').then((cblist) => {
            if (cblist.clickBaitslist) {
                clickBaitslist = cblist.clickBaitslist;
            }
            for (let i = 0; i < elements.length; i++) {
                for (let j = 0; j < clickBaitslist.length; j++) {
                    if (elements[i].innerHTML.indexOf(clickBaitslist[j]) > -1) {
                        elements[i].remove();
                        j = clickBaitslist.length;
                    }
                }
            }
        });
    });
}

clearClickBaits();