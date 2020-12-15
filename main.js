'use strict';

/* const hardFunction = new HardFunction(users);

hardFunction.yazdir();

const x = hardFunction.isAdmin

console.log(x) */

/* const users = [
    { id: 1, name: "Erdinç", surname: "Cürebal", age: 28 },
    { id: 2, name: "Melike", surname: "Atasoy", age: 23 },
    { id: 3, name: "Onur", surname: "Özdemir", age: 23 },
    { id: 4, name: "Nurcan", surname: "Cürebal", age: 26 },
];

const x = users.sort((a, b) => {
    let x = a.name[0].toLowerCase().codePointAt(0);
    let y = b.name[0].toLowerCase().codePointAt(0);
    return y - x;
})

console.log(x) */

// Birlite sayı toplayalım.
/* const total = numbers.reduce((a,b) => {
    return a + b;
})

console.log(total) */


/* const meyveler = "muz şeftali ";

const arrayMerve = meyveler.split(' ');

let xxxx = [];

arrayMerve.forEach(e => {
    xxxx.push(e);

})

console.log(isNum(xxxx.id)) */

/* 
const users = {
    0: "Erdinç",
    1: "Ahmet",
    length: 3
}

let diziBenzeri = {
    0: "Merhaba",
    1: "Dünya",
    length: 5
};


const xn = Array.from(users);

console.log(xn) */
/* 

let map = new Map();

map.set("salatalik", 500);
map.set("domates", 300);
map.set("seftali", 100);


console.log("Eleman sayısını göster" + map.size);


for (let vegetable of map) {
    console.log(vegetable)
    
} */


/* 

let user = { id: 5, name: "Erdinç", surname: "Cürebal"};


let anan = []

for(let veri of Object.entries(user)){

    anan.push(veri[1])
}

console.log(anan) */


/* const [birinci,ikinci,ucuncu,dorduncu,besinci ] = "asdad asdasda".split(' ');


console.log(birinci) */

/* const obje = {
    firstname: "Erdinç",
    lastname: "Cürebal",
}

const dizi = [];
dizi[0] = "Bursa";
dizi[1] = "İstanbul";
// 2 INDEX BOS
dizi[3] = "Seftali"

function testing([birinci, ...full]){
    console.log(birinci);
    console.log(full[1]);
}

testing(dizi) */

/* const date = new Date(Date.now());

console.log(Date.parse(date).toString()) */


/* let ogrenci = {
    adi: 'Ahmet',
    yasi: 30,
    adminMi: false,
    dersler: ['html', 'css', 'js'],
    esi: null
  };
  
  let json = JSON.stringify(ogrenci);

  console.log(json)
  console.log(ogrenci) */

/* let users = []


async function fetchMoviesJSON() {
    const response = await fetch('http://127.0.0.1:5500/data.json');
    const result = await response.json();
    return result;
}

fetchMoviesJSON().then(data => {
    users = data
});

console.log(users) */


/* let propro = new Promise((resolve, reject) => {
    const url = "/data.json"
    try {
        resolve(url);
    } catch (error) {
        reject(error)
    }
});


const procuk = new Promise();

procuk.resolve("pos");

const test = new Promise();

test.then(data => console.log(data))

(async (veri) => {
    let users = [];
    await veri.then(async ve => {
        await fetch(ve)
            .then(res => res.json())
            .then(data => users = data);
    })
    console.log(users)
})(propro);

 */

/* const hello = "Merhaba"

const obje = {
    name: "Erdinç",
    surname: "Cürebal"
}

setTimeout(
    async function({name}){
        console.log(name)
    },2000,obje
) */

/* 


const a = setTimeout(() => {
    console.log("merhaba");
}, 2000)



setTimeout(() => {
    clearTimeout(a)
}, 1000) */


/* let sayi = 0;

const interval = setInterval(() => {
    console.log(++sayi)
}, 1000);


setInterval(() => {
    clearInterval(interval)
}, 5000); */


/* 

function fenaYazdir(x) {
    console.log(x)
    return function(b){
        console.log(b)
        return function(c){
            console.log(c)
        }
    }
}

fenaYazdir("Selam")("hhh")("Bız") */

/* let array = 0


function argz (...args){
    args.forEach(e => array += e)
}

argz(1,2,3,4,5,6,7,8,9)

console.log(array) */


const data = {
    users: [
        { id: 1, name: "Erdinç", surname: "Cürebal", age: 28 },
        { id: 2, name: "Melike", surname: "Atasoy", age: 23 },
        { id: 3, name: "Onur", surname: "Özdemir", age: 23 },
        { id: 4, name: "Nurcan", surname: "Cürebal", age: 26 },
    ],
    get getUsers() {
        return this.users;
    },
    set changeName([id, name]) {
        const bulundu = this.users.findIndex(item => item.id == id);
        this.users[bulundu].name = name;
    }
}
data.changeName = [1, 'Bekir'];
data.changeName = [2, 'Berk'];
data.changeName = [3, 'Merve'];

console.log(data.getUsers)


