'use strict';

// Ana verimiz.
/* const data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
] */

// Burada verimizin içersindeki verileri değiştirdik ve sınırladık.
/* const filteredData = data.map(item => {
    return {
        id: item.id,
        username: item.username,
        email: item.email,
        website: item.website
    }
}) */

// Burada verilerimizi string bir kelimeye çevirip dizine yükledik.
// const stringFilter = filteredData.map(item => {
//     return `ID: ${item.id} | USERNAME: ${item.username} | EMAIL: ${item.email} | WEBSITE: ${item.website}`;
// });

// // Tarayıcıya toplama işlemi yapalım.
// const toplamaBaslat = confirm('TOPLAMA İŞLEMİ YAPMAK İSTER MİSİN ?');

// if (toplamaBaslat) {
//     const sayi01 = prompt('BİRİNCİ SAYIYI GİRİNİZ', 0); // Birinci sayıyı giriniz.
//     const sayi02 = prompt('İKİNCİ SAYIYI GİRİNİZ', 0);
//     alert(`TOPLANAN SAYI ${+sayi01 + +sayi02}`)
// } else {
//     alert('TOPLAMA İŞLEMİNİ İPTAL ETTİNİZ !!!');
// }

// Değişkenleri birleştirelim.


// Kullanıcı giriş mantığını kavrayalım.
/* const username = "erdin";
const password = "s4123";

if (typeof username === "string" && typeof password === "string") {
    if (username.length > 5) {
        console.log('Kullanıcı ismi 5 karakterden büyüktür.')
    } else if (password.length > 8) {
        console.log('Kullanıcı şifresi 8 karakterden büyüktür.')
    } else {
        if (username !== "erdinc") {
            console.log("Kullanıcı ismi yanlış.");
        } else if (password !== "s4123") {
            console.log("Kullanıcı şifresi yanlış.");
        } else if (password === "s4123" && username === "erdinc") {
            console.log("Kullanıcı adı ve şifresi doğru.")
        }
    }
} else {
    console.log('Kullanıcı adı veya şifrenin tipi yanlış.')
} */


// Zincirleme atama yapalım.
// let a;
// let b;
// let c;

// const v = 2 + 2;

// a = b = c = v / 2;

// console.log(a + b + c)


/* let sayi01, sayi02;
sayi01 = 5, sayi02 = 10;

let sonuc = (sayi01 == sayi02 || sayi02 == 11) ? "Birinci koşul gerçekleşti." :
    (sayi02 == 12) ? "İkinci koşul gerçekleşti" : "Hiçbir koşul gerçekleşmedi."

console.log(sonuc)

let a;

(5 == 5) && console.log('eşitmiş');


((5 == 5) != 5) && console.log('eşit degil'); */


/* const obje01 = {id: 5, name: "Onur", surname: "Melike"};

const obje02 = {};
obje02.id = 6;
obje02.name = "Merve";
obje02.surname = "Nurcan";
obje02["yas"] = "15"


const obje03 = Object.assign({} ,obje02, obje01)


console.log(obje02) */
/* 
const lang = {
    messages: {
        startFunction: {
            functionStart: "Fonksiyonumuz başladı.",
            functionsTypes: "1 - Toplama | 2 - Çıkarma | 3 - Ölüm Tarihini Bulma"
        },
        functionWhich: "Fonksiyonu seçiniz.",
        errors: {
            veriHataliGelirse: "Girdiğiniz veri hatalıdır."
        },
        prompts: {
            birinci_sayi: "Birinci sayıyı giriniz:",
            ikinciSayi: "İkinci sayıyı giriniz:"
        }
    }
}

const functions = {
    toplama: function () {
        const { birinci_sayi, ikinciSayi } = lang.messages.prompts;
        const sayi01 = prompt(birinci_sayi);
        const sayi02 = prompt(ikinciSayi);
        alert(`Toplanan sayı: ${+sayi01 + +sayi02}`);
    },
    cikarma: function () {
        const { birinci_sayi, ikinciSayi } = lang.messages.prompts;
        const sayi01 = prompt(birinci_sayi);
        const sayi02 = prompt(ikinciSayi);
        alert(`Çıkarma sayı: ${+sayi01 - +sayi02}`);
    },
    olum: function () {
        const name = prompt("İsmizi giriniz:");
        const surname = prompt("Soyisim giriniz:");
        const yas = prompt("Yaş giriniz:");
        alert(`SONUÇ: ${name} ${surname} siz ${60 - yas} yıl sonra ölüceksiniz.`)

    }
}

function randomFunction() {
    const { startFunction, functionWhich } = lang.messages;
    const { veriHataliGelirse } = lang.messages.errors;
    const { toplama, cikarma, olum } = functions;
    for (const property in startFunction) {
        alert(startFunction[property]);
    }
    let hangiFon = +prompt(functionWhich);
    if (isNaN(hangiFon)) {
        alert(veriHataliGelirse);
    } else {
        switch (hangiFon) {
            case 1: {
                toplama()
                break;
            }
            case 2: {
                cikarma();
                break;
            }
            case 3:
                olum();
                break;
            default:
                alert("İstenilen fonksiyon seçilmedi.");
                break;
        }
    }
}
 */
/* randomFunction();
 */
/* const kisi = {
    fullname: "a",
    yas: 0,
    yazdir: function () {
        return `İSMİ: ${ this.fullname } | YAŞ: ${this.yas}`;
    }
};





console.log(kisi.yazdir())
 */

/* function AnaFonksiyon(posts,soyisim,yas) {
    this.posts = posts;
    this.idYakala = function(id){
        return posts.filter(item => item.id == id);
    }
    this.isimYakala = function(name){
        return posts.filter(item => item.username == name);
    }
}

const anaFonksiyon = new AnaFonksiyon(filteredData);

console.log(anaFonksiyon.isimYakala("Bret"))
console.log(anaFonksiyon.posts);
console.log(anaFonksiyon.idYakala(3))
 */


/* const x = 55;

const obje = {
    abc: 55
}

console.log(obje.abc)



function AnaFonksiyon(x) {
    this.abc = x
}

const anaFonksiyon = new AnaFonksiyon(55)

console.log(anaFonksiyon.abc) */


