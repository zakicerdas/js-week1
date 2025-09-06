        //variabel, tipe data, dan operator
//1. Buat variabel `nama`, `umur`, `statusPelajar`. Tampilkan semuanya dengan `console.log()`.  
//2. Buat variabel `uangSaku = 50000`, `jajan = 15000`, hitung sisa uangnya.  
//3. Buat variabel `sudahLogin = true`. Cek apakah user sudah login, jika iya tampilkan `"Selamat datang"`.  
//4. Buat variabel `nilai = 75`. Jika nilai ≥ 70 tampilkan `"Lulus"`, jika tidak `"Tidak Lulus"`.  
//5. Coba deklarasikan `const angka = 10`, lalu ubah nilainya. Apa hasilnya?  


//1.
const nama = "zaki attoriq";
let umur = 15;
let statusPelajar = "baru lulus";

console.log("nama saya " + nama + ", umur saya "  + umur + " tahun, saya" + statusPelajar + " sekolah");


//2.
let uangSaku = 50000;
const jajan = 15000;
let hasil = uangSaku - jajan;

console.log("uang jajan saya tersisa " + hasil)


//3.
const sudahLogin = true;

if (sudahLogin) {
    alert("selamat datang goshujin sama!");
    console.log("selamat datang goshujin sama!");
}else{
    alert("selamat tinggal goshujin sama!");
    console.log("selamat datang goshujin sama!");
}


//4.
let nilai = 75;

if (nilai >= 7){
    console.log("kamu lulus!")
}else{
    console.log("kamu tidak lulus!")
}


//5.
const angka = 10;
    
try{
    angka = 20;
}catch(error){
    console.error(error.message);
    
}

        //Struktur Kontrol (If, Switch, Loop)
//6. Buat program cek ganjil/genap dari angka tertentu.  
//7. Buat program yang menampilkan nama bulan sesuai angka (1–12) menggunakan `switch`.  
//8. Buat program untuk mencetak angka 1 sampai 20 dengan `for`.  
//9. Buat program untuk mencetak bilangan kelipatan 5 dari 1–50.  
//10. Buat program yang terus meminta input password hingga benar (`while`). 


//6.
let number = 3;
if (number %2 === 0) {
    console.log("angka ini ganjil")
}else{
    console.log("angka ini genap")
}


//7.
let bulan = 3;

switch (bulan) {
    case 1:
        console.log("Januari");
        break;
    case 2:
        console.log("Februari");
        break;
    case 3:
        console.log("Maret");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Mei");
        break;
    case 6:
        console.log("Juni");
        break;
    case 7:
        console.log("Juli");
        break;
    case 8:
        console.log("Agustus");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("Desember");
        break;
    default:
        console.log("gak ada bulan segitu! hmpph!");
}


//8.
for (let i = 1; i <= 50; i++){
    console.log(i);
}


//9.
for (let a = 1; a <= 50; a++){
    if (a %5 === 0){
        console.log(a)
    }
}


//10.
let passwordBenar = "admin123";
let inputPassword = "";

while (inputPassword !== passwordBenar) {
    inputPassword = prompt("isi passwordnya!")
    
}

            //Fungsi
//11. Buat fungsi `sapa(nama)` yang menampilkan `"Halo, [nama]!"`.  
//12. Buat fungsi `hitungLuasSegitiga(alas, tinggi)` yang mengembalikan hasilnya.  
//13. Buat fungsi `cekUmur(umur)` → tampilkan `"Dewasa"` jika ≥ 18, `"Anak-anak"` jika < 18.  
//14. Buat fungsi ekspresi untuk menghitung diskon belanja.  
//15. Buat arrow function untuk menghitung konversi suhu Celcius ke Fahrenheit. 


//11.
let namaMaster = "zaki";
function sapa(namaMaster) {
    alert("halo, selamat datang " + namaMaster + "-sama ⸜(｡˃ ᵕ ˂ )⸝♡");
}
sapa()


//12.
function hitungLuasSegitiga(alas,tinggi){
    return 0.5 * alas * tinggi;
}
console.log("luas dari segitiga dengan alas 12 dan tingginya 13 adalah " +hitungLuasSegitiga(12,5))


//13.
function cekUmur(umurSaya){
    if (umurSaya >= 18){
        console.log("anda sudah dewasa");
    }else{
        console.log("cil..cil..")
    }
}
cekUmur(12)
cekUmur(21)


//14.
function diskonTol(harga,diskon){
    return harga-(harga*diskon);
}
console.log("barang dengan harga 100000 setelah diberi diskon 14% adalah " + diskonTol(100000,0.14));

//15.
const KonversiSuhu = (C) => (C * 9/5) + 32;
       console.log("15000000° jika di konversikan ke Fahrenheit menjadi " + KonversiSuhu(15000000) + " °F");


        //Scope, Hoisting, Closure
//16. Buat variabel `sekolah` di global, tampilkan di dalam fungsi.  
//17. Buat variabel `guru` di dalam fungsi, coba tampilkan di luar fungsi. Apa yang terjadi?  
//18. Coba tampilkan variabel `var` sebelum dideklarasikan. Apa hasilnya?  
//19. Buat fungsi `buatCounter()` yang tiap kali dipanggil menambah angka +1 (gunakan closure).  
///20. Buat fungsi `pencatatanPengeluaran()` yang menyimpan total pengeluaran dengan closure. 


//16.
const sekolah = "Rumah IT";
function panggil() {
    console.log("aku menuntut ilmu di " + sekolah);
}
panggil()


//17.
function memanggil() {
    const guru = "mas dani";
}
 try{
    console.log(guru);
}catch(error){
    console.error(error.message);
}
//hasilnya error karena variabel guru ada di dalam ruangan/function


//18.
console.log(test);
var test = "sensei"
//hasilnya undefined


//19.
let angkaAwal = 0;
         function buatCounter(){
               angkaAwal++;
               console.log("angka sekarang : " + angkaAwal);
            }
            buatCounter();
            buatCounter();
            buatCounter();


//20.
let keluar = 0;
function pencatatanPengeluaran(pengeluaran){
    keluar += pengeluaran
    console.log("pengeluaranku sekarang " + keluar)
} 
pencatatanPengeluaran(100000) 
pencatatanPengeluaran(25000)          