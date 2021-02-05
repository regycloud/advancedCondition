/*
Diberikan sebuah variable nomorTelpon yang memiliki data bertipe string.
Isi string tersebut adalah nomor telpon yang diinput oleh customer.
Buatlah sebuah program yang dapat mengidentifikasi apakah nomor telepon tersebut merupakan nomor telepon rumah atau hp.
Jika nomor hp, maka identifikasikan apakah dia tilkimsil, iimtri, atau mintiri.

Details:
1. Jika panjang nomorTelpon 11, 12 atau 13 maka itu adalah nomor hp
2. Jika panjang nomorTelpon hanya 10, maka itu adalah nomor rumah
3. Jika panjangnya melebihi 13, maka tampilkan "nomor telepon salah"
4. Jika nomorTelpon adalah nomor hp, maka periksa 4 angka di depannya.
5. Apabila 4 angka di depannya 0812, maka tampilkan "nomor telepon ini adalah nomor hp dengan provider tilkimsil
6. Apabila 4 angka di depannya 0856, maka tampilkan "nomor telepon ini adalah nomor hp dengan provider iimtri
7. Apabila 4 angka di depannya 0816, maka tampilkan "nomor telepon ini adalah nomor hp dengan provider mintiri
8. Jika nomorTelpon adalah nomor rumah, maka periksa 3 nomor terdepannya.
9. Jika 3 nomor terdepannya bukan 021, maka tampilkan "nomor telepon salah"
10. Jika 3 nomor terdepannya 021, maka tampilkan "nomor telepon ini adalah nomor rumah"
11. Jika panjang nomorTelpon kurang dari 10, maka tampilkan "Invalid nomor telpon"


Buatlah implementasinya!
*/

var nomorTelpon = "081212345678";
var panjang = nomorTelpon.length;

console.log(nomorTelpon[0]);
console.log("khontohl","    khontol", "khintil")