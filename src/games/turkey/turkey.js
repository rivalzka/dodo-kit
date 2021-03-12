var bolgeler = {
    "MARMARA": [
        { "BALIKESİR": { "plaka": 10 } },
        { "BİLECİK": { "plaka": 11 } },
        { "BURSA": { "plaka": 16 } },
        { "ÇANAKKALE": { "plaka": 17 } },
        { "EDİRNE": { "plaka": 22 } },
        { "İSTANBUL": { "plaka": 34 } },
        { "KIRKLARELİ": { "plaka": 39 } },
        { "KOCAELİ": { "plaka": 41 } },
        { "SAKARYA": { "plaka": 54 } },
        { "TEKİRDAĞ": { "plaka": 59 } },
        { "YALOVA": { "plaka": 77 } }
    ],
    "KARADENIZ": [{ "AMASYA": { "plaka": 5 } }, { "ARTVİN": { "plaka": 8 } }, { "BARTIN": { "plaka": 74 } }, { "BAYBURT": { "plaka": 69 } }, { "BOLU": { "plaka": 14 } }, { "ÇORUM": { "plaka": 19 } }, { "DÜZCE": { "plaka": 81 } }, { "GİRESUN": { "plaka": 28 } }, { "GÜMÜŞHANE": { "plaka": 29 } }, { "KARABÜK": { "plaka": 78 } }, { "KASTAMONU": { "plaka": 37 } }, { "ORDU": { "plaka": 52 } }, { "RİZE": { "plaka": 53 } }, { "SAMSUN": { "plaka": 55 } }, { "SİNOP": { "plaka": 64 } }, { "TOKAT": { "plaka": 60 } }, { "TRABZON": { "plaka": 61 } }, { "ZONGULDAK": { "plaka": 67 } }],
    "ICANADOLU": [{ "AKSARAY": { "plaka": 68 } }, { "ANKARA": { "plaka": 6 } }, { "ÇANKIRI": { "plaka": 18 } }, { "ESKİŞEHİR": { "plaka": 26 } }, { "KARAMAN": { "plaka": 70 } }, { "KAYSERİ": { "plaka": 38 } }, { "KIRIKKALE": { "plaka": 71 } }, { "KIRŞEHİR": { "plaka": 40 } }, { "KONYA": { "plaka": 42 } }, { "NEVŞEHİR": { "plaka": 50 } }, { "NİĞDE": { "plaka": 51 } }, { "SİVAS": { "plaka": 58 } }, { "YOZGAT": { "plaka": 66 } }],
    "DOGUANADOLU": [{ "AĞRI": { "plaka": 4 } }, { "ARDAHAN": { "plaka": 75 } }, { "BİNGÖL": { "plaka": 12 } }, { "BİTLİS": { "plaka": 13 } }, { "ELAZIĞ": { "plaka": 23 } }, { "ERZİNCAN": { "plaka": 24 } }, { "ERZURUM": { "plaka": 25 } }, { "HAKKARİ": { "plaka": 30 } }, { "IĞDIR": { "plaka": 76 } }, { "KARS": { "plaka": 36 } }, { "MALATYA": { "plaka": 44 } }, { "MUŞ": { "plaka": 49 } }, { "TUNCELİ": { "plaka": 62 } }, { "VAN": { "plaka": 65 } }],
    "GUNEYDOGU": [{ "ADIYAMAN": { "plaka": 2 } }, { "BATMAN": { "plaka": 72 } }, { "DİYARBAKIR": { "plaka": 21 } }, { "GAZİANTEP": { "plaka": 27 } }, { "KİLİS": { "plaka": 79 } }, { "MARDİN": { "plaka": 47 } }, { "ŞANLIURFA": { "plaka": 63 } }, { "SİİRT": { "plaka": 61 } }, { "ŞIRNAK": { "plaka": 73 } }],
    "EGE": [{ "AFYONKARAHİSAR": { "plaka": 3 } }, { "AYDIN": { "plaka": 9 } }, { "DENİZLİ": { "plaka": 20 } }, { "İZMİR": { "plaka": 35 } }, { "KÜTAHYA": { "plaka": 43 } }, { "MANİSA": { "plaka": 45 } }, { "MUĞLA": { "plaka": 48 } }, { "UŞAK": { "plaka": 64 } }],
    "AKDENIZ": [{ "ADANA": { "plaka": 1 } }, { "ANTALYA": { "plaka": 7 } }, { "BURDUR": { "plaka": 15 } }, { "HATAY": { "plaka": 31 } }, { "ISPARTA": { "plaka": 32 } }, { "KAHRAMANMARAŞ": { "plaka": 46 } }, { "MERSİN": { "plaka": 33 } }, { "OSMANİYE": { "plaka": 80 } }]
};

var turkey;
var dogu = document.querySelector('[data-bolgeadi="Doğu Anadolu Bölgesi"]');
var icanadolu = document.querySelector('[data-bolgeadi="İç Anadolu Bölgesi"]');
var akdeniz = document.querySelector('[data-bolgeadi="Akdeniz Bölgesi"]');
var ege = document.querySelector('[data-bolgeadi="Ege Bölgesi"]');
var karadeniz = document.querySelector('[data-bolgeadi="Karadeniz Bölgesi"]');
var guneydogu = document.querySelector('[data-bolgeadi="Güneydoğu Anadolu Bölgesi"]');
var marmara = document.querySelector('[data-bolgeadi="Marmara Bölgesi"]');
var karadenizContent, akdenizContent, egeContent,
    icanadoluContent, doguanadoluContent, ganadoluContent, marmaraContent;

function initMap() {
    turkey = document.getElementById('turkeyMap');
    marmaraContent = "MARMARA" + getContent("MARMARA");
    karadenizContent = "KARADENİZ" + getContent("KARADENIZ");
    akdenizContent = "AKDENİZ" + getContent("AKDENIZ");
    icanadoluContent = "İÇ ANADOLU" + getContent("ICANADOLU");
    doguanadoluContent = "DOĞU ANADOLU" + getContent("DOGUANADOLU");
    ganadoluContent = "MARMARA" + getContent("MARMARA");
    egeContent = "EGE" + getContent("EGE");
}

function getContent(bolge) {
    var content = " BÖLGESİ: ";
    var iller = bolgeler[bolge];
    for (var i = 0; i < iller.length; i++) {
        var il = iller[i];
        for (var key in il) {

            content += "< " + key;
            content += " (" + il[key].plaka + ") >";
        }
    }
    return content;
}

function setCity(city) {
    document.getElementById('movetxt').innerHTML = city;
}

function setText(text) {
    document.getElementById('movetxt').innerHTML = text;
    var w = document.getElementById("movetxt").clientWidth;
    document.getElementById("movetxt").style.setProperty('--end-point', 'calc(50vw - 75vmin - ' + w + 'px )');
    document.getElementById("movetxt").style.setProperty('--end-time', (w / 90) + 's');
    document.getElementById("movetxt").classList.add("anim");
}

function clearText() {
    document.getElementById("movetxt").classList.remove("anim");
    document.getElementById('movetxt').innerHTML = "TÜRKİYE BÖLGELER";
}
key_init();
keyList.w.f_down = () => {
    turkey.classList.add('karadeniz');
    setText(karadenizContent);
}
keyList.w.f_up = () => {
    turkey.classList.remove('karadeniz');
    clearText();
}

keyList.a.f_down = () => {
    turkey.classList.add('marmara');
    setText(marmaraContent);
}
keyList.a.f_up = () => {
    turkey.classList.remove('marmara');
    clearText();
}

keyList.s.f_down = () => {
    turkey.classList.add('ege');
    setText(egeContent);
}
keyList.s.f_up = () => {
    turkey.classList.remove('ege');
    clearText();
}

keyList.d.f_down = () => {
    turkey.classList.add('akdeniz');
    setText(akdenizContent);
}
keyList.d.f_up = () => {
    turkey.classList.remove('akdeniz');
    clearText();
}

keyList.f.f_down = () => {
    turkey.classList.add('guneydogu');
    setText(ganadoluContent);
}
keyList.f.f_up = () => {
    turkey.classList.remove('guneydogu');
    clearText();
}

keyList.g.f_down = () => {
    turkey.classList.add('doguanadolu');
    setText(doguanadoluContent);
}
keyList.g.f_up = () => {
    turkey.classList.remove('doguanadolu');
    clearText();
}

keyList.space.f_down = () => {
    turkey.classList.add('icanadolu');
    setText(icanadoluContent);
}
keyList.space.f_up = () => {
    turkey.classList.remove('icanadolu');
    clearText();
}