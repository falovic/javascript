// tek satırlık yorum kısımları için double-slash

/* birden fazla satırlı yorum kısımları için slash+star */

// (Ctrl+K)+(Ctrl+C) = seçilenlerin alayına double-slash

/*

032 - GİRİŞ
060 - DEĞİŞKENLER
OPERATÖRLER
VERİ YAPILARI
DİZİLER
KOŞUL İFADELERİ
DÖNGÜLER
FONKSİYONLAR
DOM
EVENTS
LOCAL-STORAGE
JQUERY
NESNE TABANLI PROGRAMLAMA
HATA YÖNETİMİ
ES6+ & ES7
RESTFUL API & AJAX
MODULE PATTERN
NODEJS & NPM
TYPE-SCRİPT

*/

///*************/
//*** GİRİŞ ***/
/*************/

// JS kodları, <body> içersinde yer alan <script> etiketine girilerek yazılabilir.

// Ya da harici bir script.js dosyası oluşturulabilir.

// site pop-up uyarı mesajı:

alert("Tamam mı devam mı?");

// console çıktıları:

console.log("Sayfayı incele > Console dediğimizde çıktılar burada gözükür")

// console hata mesajı:

console.error("hata")

// console uyarı mesajı

console.warn("uyarı")

// console sayı dizini

console.log([1, 2, 3])

///*******************/
//*** DEĞİŞKENLER ***/
/*******************/

// bir değişkene değer atanmazsa "undefined" olarak gözükür.

var age;
console.log(age);

// "age" değişkenine "20" değerini ve "fullname" değişkenine "fatih şahin" değerini atayalım.

var age = 20;
console.log(age);

var fullname = 'fatih şahin';
console.log(fullname);

// değişkenler sayısal ifadeyle başlayamaz.

// var 1yas;  - yanlış
var yas1;  // - doğru
var _yas2; // - doğru
var $yas3; // - doğru

// komut isimleriyle tanımlama yapılamaz.

// var for; - yanlış

// birden fazla kelime arasında boşluk bırakılarak değişken atanamaz. 

// var ad soyad='fatih şahin' - yanlış
var ad_soyad = 'fatih şahin' // - doğru
var AdSoyad = 'fatih şahin'  // - doğru
var adsoyad = 'fatih şahin'  // - doğru

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

// farklı değer atanmadığından emin olmak için "const" değişkeni kullanılır. 
// "var" ya da "let" değişkeni kullanıldığında, sehven farklı değerler atanırsa console hata vermez, farketmek mümkün olmaz.   
// ancak "const" değişkenine aşağıdaki gibi iki farklı değer (mail) atanırsa console'da hata mesajı verir.

/*
const email = 'abc@gmail.com';
console.log(email);

email = 'xyz@gmail.com';
console.log(email);
*/

//*** DEĞİŞKEN TÜRLERİ ***//

// değişken türleri "typeof" değeri ile kontrol edilebilir.

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

/// Primitive Types ///

// "string" = sözel işlemler için kullanılır. 

let name = 'echo';
console.log(typeof name);

// "number" = sayısal işlemler için kullanılır. 

let old = 25;
let money = 100.5;

console.log(typeof old)
console.log(typeof money)

// "boolean" = koşul durumlarında kullanılır. bir soruya 'true' ya da 'false' karşılığının verilmesi gibi.

let isActive = true;

console.log(typeof isActive)

// "null" = herhangi bir değer atanmadığında boşluğu temsil eder.

let job = null;

console.log(typeof isActive)

// "undefined"

let car;

console.log(typeof car)

/// Reference Types - Objects ///

// "array" = sıralı dizinler için kullanılır.

let names = ["Jack", "Neo", "Max"]

// "object"

let adress = {
   city: "Bursa",
   country: "Türkiye",
}

// "function"

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

val = String(new Date());   // .get yazılarak yalnızca ay,gün,yıl gibi değerler seçilip görüntülenebilir. 

// array to string

val = String([1, 2, 3]);

// toString() (değerin sonuna .toString ekleyerek de kolayca dönüştürülebilir)

val = (10).toString();
val = (false).toString();

console.log(val);         // değişken içeriği 
console.log(typeof val);  // değişken türü
console.log(val.length);  // karakter sayısı (only string)

// string to number

val = Number("a");
val = Number(true)
val = Number(false)
val = Number(null)
val = Number("35")

// parseInt

val = parseInt("10");
val = parseInt("10.5");

// parseFloat

val = parseFloat("10.5");

console.log(val);            // değişken içeriği 
console.log(typeof val);     // değişken türü
console.log(val.toFixed(3))  // ondalık basamak sayısı (only number)