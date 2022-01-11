// tek satırlık yorum kısımları için double-slash

/* birden fazla satırlı yorum kısımları için slash+star */

/*

GİRİŞ
DEĞİŞKENLER
DEĞİŞKEN TİPLERİ

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
var ad_soyad='fatih şahin' // - doğru
var AdSoyad='fatih şahin'  // - doğru
var adsoyad='fatih şahin'  // - doğru

// case sensitive (büyük - küçük harf duyarlılığı vardır)

var firstname='alpha'
var FirstName='beta'
var firstName='charlie'
var Firstname='delta'

console.log(firstname);
console.log(FirstName);
console.log(firstName);
console.log(Firstname);

// var , let , const

let city='Bursa';
console.log(city);

// farklı değer atanmadığından emin olmak için "const" değişkeni kullanılır. 
// "var" ya da "let" değişkeni kullanıldığında, sehven farklı değerler atanırsa console hata vermez, farketmek mümkün olmaz.   
// ancak "const" değişkenine aşağıdaki gibi iki farklı değer (mail) atanırsa console'da hata mesajı verir.

const email='abc@gmail.com';
console.log(email);

email='xyz@gmail.com';
console.log(email);

///************************/
//*** DEĞİŞKEN TİPLERİ ***/
/************************/