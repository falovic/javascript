// JS Pill Notes

// (Ctrl+K)+(Ctrl+C) = seçilenlerin alayına double-slash

// (Ctrl+K)+(Ctrl+U) = double-slash geri alınır

// 028 - GİRİŞ
// 051 - DEĞİŞKENLER
// 209 - OPERATÖRLER
// 284 - VERİ YAPILARI
// 428 - DİZİLER
// 516 - KOŞUL İFADELERİ
// DÖNGÜLER
// FONKSİYONLAR
// DOM
// EVENTS
// LOCAL-STORAGE
// JQUERY
// NESNE TABANLI PROGRAMLAMA
// HATA YÖNETİMİ
// ES6+ & ES7
// RESTFUL API & AJAX
// MODULE PATTERN
// NODEJS & NPM
// TYPE-SCRİPT

///*************/
//*** GİRİŞ ***/
/*************/

// JS kodları, <body> içersinde yer alan <script> etiketine girilerek yazılabilir.

// Ya da harici bir script.js dosyası oluşturulabilir.

// site pop-up uyarı mesajı
// alert('Tamam mı devam mı?');

// console çıktıları:
console.log('Sayfayı incele > Console dediğimizde çıktılar burada gözükür')

// hata mesajı:
console.error('hata')

// uyarı mesajı
console.warn('uyarı')

// sayı dizini
console.log([1, 2, 3])

///*******************/
//*** DEĞİŞKENLER ***/
/*******************/

// bir değişkene değer atanmazsa 'undefined' olarak gözükür.
var age;
console.log(age);

// 'age' değişkenine '20' değerini ve 'fullname' değişkenine 'fatih şahin' değerini atayalım.
// var age = 25;
console.log(age);
var fullname = 'fatih şahin';
console.log(fullname);

// değişkenler sayısal ifadeyle başlayamaz.
var yas1;    // doğru
var _yas2;   // doğru
var $yas3;   // doğru
// var 1yas; // yanlış

// komut isimleriyle tanımlama yapılamaz.
// var for; - yanlış

// birden fazla kelime arasında boşluk bırakılarak değişken atanamaz. 
var ad_soyad = 'fatih şahin' // doğru
var AdSoyad = 'fatih şahin'  // doğru
var adsoyad = 'fatih şahin'  // doğru
// var ad soyad = 'fatih şahin' // yanlış

// case sensitive (büyük - küçük harf duyarlılığı vardır)
var firstname = 'alpha'
var FirstName = 'beta'
var firstName = 'charlie'
var Firstname = 'delta'
console.log(firstname);
console.log(FirstName);
console.log(firstName);
console.log(Firstname);

// var , let , const
let city = 'Bursa';
console.log(city);

// farklı değer atanmadığından emin olmak için 'const' değişkeni kullanılır. 
// 'var' ya da 'let' değişkeni kullanıldığında, sehven farklı değerler atanırsa console hata vermez, farketmek mümkün olmaz.   
// ancak 'const' değişkenine aşağıdaki gibi iki farklı değer (mail) atanırsa console'da hata mesajı verir.

/*
const email = 'abc@gmail.com';
console.log(email);
const email = 'xyz@gmail.com';
console.log(email);
*/

//*** DEĞİŞKEN TÜRLERİ ***//

/*
1. primitive types
   a. string
   b. number
   c. boolean
   d. null
   e. undefined
2. reference types - objects
   a. array
   b. object
   c. function
*/

// değişken türleri 'typeof' değeri ile kontrol edilebilir.

// Primitive Types //

// 'string' = sözel işlemler için kullanılır. 
let name = 'echo';
console.log(typeof name);

// 'number' = sayısal işlemler için kullanılır. 
let old = 25;
let money = 100.5;
console.log(typeof old)
console.log(typeof money)

// NaN : Not a Number

// 'boolean' = koşul durumlarında kullanılır. bir soruya 'true' ya da 'false' karşılığının verilmesi gibi.
let isActive = true;
console.log(typeof isActive)

// 'null' = herhangi bir değer atanmadığında boşluğu temsil eder.
let job = null;
console.log(typeof isActive)

// 'undefined'
let car;
console.log(typeof car)

// Reference Types - Objects //

// 'array' = sıralı dizinler için kullanılır.
// let names = ['Jack', 'Neo', 'Max']

// 'object'
let adress = {
   city: 'Bursa',
   country: 'Türkiye',
}

// 'function'
var calculateAge = function () {
   return 0;
}
console.log(typeof calculateAge)

//*** TÜR DÖNÜŞÜMÜ ***//

let val;

// number to string
val = String(10);

// bool to string
val = String(true);

// date to string
val = String(new Date());
val = String(new Date().getFullYear)

// .get yazılarak yalnızca ay,gün,yıl gibi değerler de seçilip görüntülenebilir.

// array to string
val = String([1, 2, 3]);

// toString() 
val = (10).toString();
val = (false).toString();

// değerin sonuna .toString ekleyerek de kolayca dönüştürülebilir.

// string to number
val = Number('a');
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('35')

// parseInt (string ifadeyi tam sayı olarak dönüştürür)
val = parseInt('10');
val = parseInt('10.5');

// parseFloat (string ifadeyi ondalık sayı olarak dönüştürür)
val = parseFloat('10.5');

console.log(val);           // değişken içeriği 
console.log(typeof val);    // değişken türü
console.log(val.length);    // karakter sayısı (only string)
console.log(val.toFixed(3)) // ondalık basamak sayısı (only number)

///*******************/
//*** OPERATÖRLER ***/
/*******************/

/* 
1. aritmetik operatörler
2. atama operatörleri
3. karşılaştırma operatörleri
4. mantıksal operatörler
   a. && (And)
   b. || (Or)
   c. ! (Not)
*/

const a = 10;
const b = 5;
const c = '5';
let d = 3;

// 1. aritmetik operatörler: matematiksel işlemlerde kullanılan operatörleri temsil eder.
val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++;
val = ++d;
val = --d;
val = d--;

// 2. atama operatörleri
val = a;
val += a; // val = val + a;
val -= a; // val = val - a; 
val *= a; // val = val * a;
val /= a; // val = val / a;
val %= a; // val = val % a; (% : mod)

// 3. karşılaştırma operatörleri
val = a == b;
val = b == c;   // == değer kontrolü
val = b === c;  // === değer & type kontrolü
val = a != b;   // a! a'nın 'değil'ini almaktır 
val = a !== b;
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;

// 4. mantıksal operatörler

// a. && (And)
// true  && true  => true
// true  && false => false
// false && false => false

val = (a > b) && (a > c)

// b. || (Or)
// true  || true  => true
// true  || false => true
// false || false => false

val = (a > b) || (a < c)

// c. ! (Not)
// !true  => false
// !false => true

val = !(a > b)

console.log(val);
console.log(typeof val);

///*********************/
//*** VERİ YAPILARI ***/
/*********************/

//*** DATES & TIMES ***//

// date object
let time = new Date();
let birthday = new Date(1997, 1, 23);
console.log("Fatih'in yaşı:" + (time.getFullYear() - birthday.getFullYear()));

// set methods
time.setFullYear(2050);
time.setMonth(time.getMonth() + 1);

// get methods
console.log(time.getDate());     // ayın kaçıncı günü
console.log(time.getDay());      // haftanın kaçıncı günü (pazar:0)
console.log(time.getFullYear()); // yıl
console.log(time.getHours());    // saat
console.log(time.getMonth());    // yılın kaçıncı ayı (ocak:0)
console.log(time.getMinutes());  // dakika
console.log(time.getSeconds());  // saniye

//*** NUMBERS & NUMBER METHODS ***//

var num = 10.123456789

val = isNaN("10");        // NaN sorugusu yapar.
val = num.toPrecision(4); // .toPrecision(x) sayının x kadar basamağını yazdırır. sondaki rakamı yuvarlamaz.
val = num.toFixed(4);     // .toFixed(x) sayının virgülden sonraki x kadar basamağını yazdırır. sondaki rakamı yuvarlar.
val = Math.PI;            // pi sayısı
val = Math.round(2.4);    // .round(x) x'i en yakın sayıya yuvarlar.
val = Math.round(2.7);
val = Math.ceil(2.4);     // .ceil(x) x'i sadece yukarı yuvarlar.
val = Math.ceil(2.7);
val = Math.floor(2.4);    // .floor(x) x'i sadece aşağı yuvarlar.
val = Math.floor(2.7);
val = Math.sqrt(64);      // .sqrt(x) x'in karekökünü alır.
val = Math.pow(3, 3);     // .sqrt(x,y) x üzeri y'yi hesaplar.
val = Math.abs(-100);     // .abs(x) x'in mutlak değerini alır.
val = Math.min(2, 3, 4);  // .min(x,y,z) sayı dizisindeki en küçük sayıyı verir.
val = Math.max(2, 3, 4);  // .max(x,y,z) sayı dizisindeki en büyük sayıyı verir.
val = Math.random()       // .random() rastgele sayı getirir.

// val = Math.floor(Math.random()*100+1) 
// 0-100 arasında rastgele değerler getirdik.
// rastgele resimler getirmek için resimlere bu şekilde değerler atanabilir.

val = Math.floor(Math.random() * 100 + 1)

console.log(val);
console.log(typeof val);

//*** STRİNGS ***//

const first_name = "Fatih";
const last_name = "Şahin";

// string concat (birleştirme)

val = "val değerleri + ile eklenerek, += ya da .contact(x,y) ile birlşetirilebilir."
val = first_name + " " + last_name
val = first_name.concat(" ", last_name);
val = "Fatih";
val += "Şahin";

/*
string ifadeler 'tek tırnak' ya da "çift tırnak" içine alınır. 
kesme işaretini belirtmek için öncesinde ters slash (\') kullanılır.
*/

val = 'Bursa\'da yaşıyorum.';

// string lenght 

val = "val değerinin karakter sayısını görüntüler."
val = val.length;

// string uppercase - lowercase

val = "lowercase harfleri küçültür, uppercase harfleri büyütür."
val = val.toUpperCase();
val = val.toLowerCase();

// string indexOf

val = "harf veya kelimenin 0'dan başlayarak index numarasını (sırasını) verir. harf bulunamazsa -1 döndürür."
val = val.indexOf("veya")

// string includes

val = "harf veya kelimeyi sorgular. bulursa true, bulamazsa false değeri döndürür."
val = val.includes("veya")

// string startsWith

val = "ifadenin başladığı değeri sorgulayarak true/false döndürür."
val = val.startsWith("ifade");

// substring

val = "başlangıç ve bitiş index değerleri arasındaki kısmı getirir."
val = val.substring(35, 43);

// string slice

val = "substring ile aynı işlevi görür. tek değer girilirse o değerden itibaren ifadenin tamamını görüntüler."
val = val.slice(82);

// string replace

val = "bir x değerini y'ye dönüştürmek için .replace(x,y) kullanılır."
val = val.replace("dönüştürmek", "çevirmek");

/*
.replace ile tüm değerler değiştirilmek istendiğinde /.../g ile (/değer1/g, "değer2") şeklinde yazılır.
*/

// string trim

val = "     ifadenin başındaki ve sonundaki boşluklar .trim() metodu ile alınabilir.     "
val = val.trim();

// string split

val = "split bir ifadedeki elemanları seçilen karakterden (boşluk) itibaren ayırarak dizi haline getirir."
val = val.split(" ");

//*** TEMPLATE LİTERALS ***//

val = "ters tırnak açıp, ${...} kullanarak dinamik ifadeleri direkt cümle içine yerleştirebiliriz."

let birth = 1997;
val = "my name is " + fullname + " I\'m " + (2022 - birth) + " years old " + "and I live in " + city;
val = `my name is ${fullname} I'm ${2022 - birth} years old and I live in ${city}`;

// ternary operator
val = "koşul içeren soru sorarak true/false karşılığında farklı cevapların cümlede yer almasını sağlayabiliriz."
val = `my name is ${fullname} I'm ${2022 - birth >= 18 ? "over 18" : "under 18"} years old and I live in ${city}`;

console.log(val);
console.log(typeof val);

///***************/
//*** DİZİLER ***/
/***************/

val = "boş bir dizi elemanı console'a yazdırıldığında kullanılabilecek tüm metodlar görüntülenir."
let empty = [];
console.log(empty);

let names = ["deniz", "sena", "ada", "cenk"];
let years = [2017, 1999, 2012, 2010, 1984, 1977, 2001];
let mix = ["fatih", "şahin", 1983, null, undefined, ["oyun", "kitap"]];

// get array item

console.log(names[0]);
console.log(names[3]);

// set array item

val = "dizideki eleman farklı bir elemanla değiştirilebilir."
names[0] = "emel"

val = "diziye extra eleman eklemek için dizinin lenght'i seçilir."
names[names.lenght] = "burak"

// add item

val = ".push() dizinin son elemanı olarak atar."
val = ".unshift() dizinin ilk elemanı olarak atar."
years.push(1984);
years.unshift(1997);

// remove item

val = ".pop() dizinin son elemanını siler."
val = ".shift() diziinn ilk elemanını siler."
years.pop();
years.shift();

// indexof

val = "index numarasını verir, eleman bulunamazsa -1 değerini alır."
let index = names.indexOf("ada");
console.log("index:" + index);

// reverse

val = ".reverse() diziyi ters çevirir."
names.reverse();

// sort

val = ".sort() ile dizi sayısal ya da alfabetik olark sıralanır."
names.sort();
years.sort();

// concat

val = ".concat() ile birden fazla dizi birleştirilir."
console.log(names.concat(years));

// splice

val = ".splice(x,y,'z') x'ten itibaren y tane eleman siler ve sonuna 'z' elemanını ekler."
names.splice(3, 1, "seda");

console.log(names);
console.log(years);
console.log(mix);

// find
val = ".find() metodu, dizide koşulu sağlayan ilk elemanı getirir."

function over18(year) {
   let age = 2022 - year;
   return (age >= 18);
}
console.log(years.find(over18));

// filter
val = ".filter() metodu, dizide koşulu sağlayan tüm elemanları getirir."

function over18(year) {
   let age = 2022 - year;
   return (age >= 18);
}
console.log(years.filter(over18));

///***********************/
//*** KOŞUL İFADELERİ ***/
/***********************/

// if & else statements

val = "if & else yapısında true değer için if, false değer için else kısmına değer girilir."
const name2 = "Fatih";
const age2 = 25;
const isStudent = true;
const school = "university";

if (name2 == "Fatih") {
   console.log("Merhaba Fatih");
}

if (age2 >= 18) {
   if ((school == "university") || (school == "university")) {
      console.log("Ehliyet alabilirsiniz.")
   }
   else {
      console.log("Eğitim durumunuz yetersiz, ehliyet alamazsınız.")
   }
}
else {
   console.log("Yaşınız yetersiz, ehliyet alamazsınız.")
}

val = "koşulları artırmak için 'else if' kalıbı kullanılır."

// 648'de switch ile yapıldı.

if (age2 >= 0 && age2 < 13) {
   console.log(`${name2} is a child.`);
}
else if (age2 >= 13 && age2 < 19) {
   console.log(`${name2} is a teenager.`);
}
else {
   console.log(`${name2} is an adult.`);
}

val = "değişkenin 'undefined' olmaması durumunda id değerinin yazdırılmasını sağlayalım."

let id = "6651"

if (typeof id !== "undefined") {
   console.log("ID:" + id)
}
else {
   console.log("No ID")
}

// switch statements

val = "1. koşulların çok fazla olduğu durumalarda 'switch' kullanılır."
"2. switch ifade alanına yazılan değer ile case değerlerini sırayla karşılaştırır."
"3. karşılaştırma sonucunda eşleşme sağlanırsa eşleşen kod bloğundaki komutlar çalıştırılır."

/*
switch (ifade) {
   case a:
   a kod bloğu
      break;
   case b:
   b kod bloğu
      break;
   default:
   varsayılan kod bloğu
}
*/

let category = "beyaz eşya";

switch (category) {
   case "telefon":
      console.log("telefon kategorisi");
      break;
   case "bilgisayar":
      console.log("bilgisayar kategorisi");
      break;
   default:
      console.log("yanlış kategori")
}

val = "bugünün haftanın hangi günü olduğunu bulalım."

let day;

switch (new Date().getDay()) {
   case 0:
      day = "pazar";
      break;
   case 1:
      day = "pazartesi";
      break;
   case 2:
      day = "salı";
      break;
   case 3:
      day = "çarşamba";
      break;
   case 4:
      day = "perşembe";
      break;
   case 5:
      day = "cuma";
      break;
   case 6:
      day = "cumartesi";
      break;
}
console.log(`bugün günlerden ${day}`);

val = "koşulları birleştirmek de mümkündür."

switch (new Date().getDay()) {
   case 0:
   case 6:
      day = "hafta sonu";
      break;
   case 1:
   case 2:
   case 3:
   case 4:
   case 5:
      day = "hafta içi";
      break;
}
console.log(`bugün ${day}`);

// 547'de if & else ile yapıldı.

switch (true) {
   case age2 > 0 && age2 < 12:
      console.log(`${name2} is a child.`);
      break;
   case age2 >= 13 && age2 < 19:
      console.log(`${name2} is a teenager.`);
      break;
   default:
      console.log(`${name2} is an adult.`)
}

/*
siteye giriş yapınca sorgu ekranı
prompt("who's there?");
*/

// object litereals

val = "bir kullanıcı ya da ara"

let person = {
   first_name: "Fatih",
   last_name: "Şahin",
   age: 25,
   hobbies: ["camp", "code", "game"],
   address: {
      city: "Bursa",
      country: "Türkiye",
   },
   get_birth_year: function(){
      return 2022 - this.age
   }
};

val = person;
val = person.first_name;
val = person.last_name;
val = person["first_name"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.lenght;
val = person.address;
val = person.address.city;
val = person.address["city"];
//val = person.get_birth_year;

console.log(val);
console.log(typeof val);

console.log(Date.now());