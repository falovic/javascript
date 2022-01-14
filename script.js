// tek satırlık yorum kısımları için double-slash

/* birden fazla satırlı yorum kısımları için slash+star */

// (Ctrl+K)+(Ctrl+C) = seçilenlerin alayına double-slash

// 028 - GİRİŞ
// 051 - DEĞİŞKENLER
// 209 - OPERATÖRLER
// 284 - VERİ YAPILARI
// DİZİLER
// KOŞUL İFADELERİ
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
var age = 20;
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
let names = ['Jack', 'Neo', 'Max']

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
console.log("Fatih'in yaşı:" + (time.getFullYear()-birthday.getFullYear()));

// set methods
time.setFullYear(2050);
time.setMonth(time.getMonth()+1);

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
val = Math.pow(3,3);      // .sqrt(x,y) x üzeri y'yi hesaplar.
val = Math.abs(-100);     // .abs(x) x'in mutlak değerini alır.
val = Math.min(2,3,4);    // .min(x,y,z) sayı dizisindeki en küçük sayıyı verir.
val = Math.max(2,3,4);    // .max(x,y,z) sayı dizisindeki en büyük sayıyı verir.
val = Math.random()       // .random() rastgele sayı getirir.

// val = Math.floor(Math.random()*100+1) 
// 0-100 arasında rastgele değerler getirdik.
// rastgele resimler getirmek için resimlere bu şekilde değerler atanabilir.

val = Math.floor(Math.random()*100+1)

console.log(val);
console.log(typeof val);

