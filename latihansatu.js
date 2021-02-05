/*
Budi membuka sebuah toko vape di sebelah rumahnya.
Calon pelanggan yang boleh datang ke tokonya harus berumur 18++, membawa KTP, memiliki kartu membership.
Karena saat ini sedang Corona, Budi juga harus memeriksa suhu tubuh calon pelanggannya.
Jika suhu tubuhnya di atas 37c maka calon pelanggan tidak boleh masuk.
Buatlah sebuah program yang dapat membantu Budi dalam memeriksa calon pelanggan yang masuk.
Jika dia tidak boleh masuk, maka tampilkan, "Calon pelanggan ini tidak boleh masuk".
Jika boleh, maka tampilkan "Calon pelanggan boleh masuk".
*/

var umur = 19;
var ktp = true;
var membership = true;
var suhu = 36;

if (umur > 18 && ktp && membership && suhu < 37) {
    console.log("Calon pelanggan boleh masuk");
} else {
    console.log("Calon pelanggan ini tidak boleh masuk");

}