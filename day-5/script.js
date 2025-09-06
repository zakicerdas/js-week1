//5 Studi Kasus Scope
//1.Buat variabel namaSekolah di global, lalu tampilkan di dalam fungsi.
//2.Buat variabel namaGuru di dalam fungsi, coba tampilkan di luar fungsi.
//3.Buat perulangan for dengan let i, cek apakah i bisa dipakai di luar perulangan.
//4.Bandingkan var dan let di dalam perulangan (lihat bedanya).
//5.Buat dua fungsi berbeda, masing-masing punya variabel namaSiswa. Apakah mereka bisa saling ganggu?


        //1.
        const namaSekolah = "rumah it";

        function panggil(){
            let sekolahbaru = "albadar";
            console.log(namaSekolah);
            console.log(sekolahbaru);
        }

        panggil()//memanggil namasekolah yang berada di global

        //2.
       const namaMentor = "masfikri";
        function memanggil(){
             let namaGuru = "masDani";

        }   
        console.log(namaMentor);
        try{console.log(namaGuru)}catch(error){console.log(error.message)}
         //hasilnya error karena berada dalam function

        //3.
        for(let i = 0; i <= 5; i++){}
        try{console.log(i)}catch(error){console.log(error.massage)}
        //hasilnya error karena "i" dipakai di luar perulangan


        //4.
        for(let a = 0; a <= 5; a++){
            console.log(a);
        }
         try{console.log(a)}catch(error){console.log(error.massage)}
         
         for(var b = 0; b <= 5; b++){
            console.log (b);
         }
            console.log(b);
         //jika menggunakan variabel "let", dan menggunakannya diluar loop maka hasilnya error
         //sementara itu jika menggunakan variabel "let" maka outputnya hasil akhir
        
         //5.
         function test1(){
            const namaSiswa = "zaki";
            console.log(namaSiswa);
         }
         test1()

         function test2(){
            const namaSiswa = "rehan";
            console.log(namaSiswa);
         }
         test2()
         //tidak bisa saling ganggu karena mereka ada di ruangan yang berbeda


         //5 Studi Kasus Hoisting
//1.Coba tampilkan variabel var sebelum didefinisikan.
//2.Coba tampilkan variabel let sebelum didefinisikan.
//3.Coba tampilkan variabel const sebelum didefinisikan.
//4.Buat fungsi normal di bawah, lalu panggil di atas.
//5.Buat fungsi versi panah (const halo = () => {}), panggil di atas. Apa bedanya?

         //1.
         console.log(nama); 
            var nama = "Jidan";
         // undefined karena variabel "var" diangkat tapi kosong

         //2.
         try{console.log(angka)}catch(error){console.log(error.massage)}
            let angka = 120;
         //harusnya hasilnya error, tapi karena saya menggunakan try agar bisa terus berjalan kode selanjutnya, hasilnya undefined

         //3.
         try{console.log(sekolah)}catch(error){console.log(error.massage)}
            const sekolah = "Rumah IT"
         //harusnya hasilnya error, tapi karena saya menggunakan try agar bisa terus berjalan kode selanjutnya, hasilnya undefined

         //4.
         salam(); // bisa jalan
            function salam() {
         console.log("اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ")};

         //5.

         try{console.log(halo)}catch(error){console.log(error.massage)}
            const halo = () => {
         console.log("Halo minasaaan!");}
         //harusnya hasilnya error, tapi karena saya menggunakan try agar bisa terus berjalan kode selanjutnya, hasilnya undefined
              

         //5 Studi Kasus Closure
//1.Buat fungsi buatCounter() yang setiap dipanggil nambah 1.
//2.Buat fungsi buatTabungan() yang bisa menyimpan uang.
//3.Buat fungsi buatKeranjangBelanja() yang bisa menambahkan barang baru.
//4.Buat fungsi buatTimer() yang menyimpan detik setiap kali dipanggil.
//5.Buat fungsi buatCatatanNama() yang bisa menambahkan nama siswa ke daftar.

         //1.
         let angkaAwal = 0;
         function buatcounter(){
               angkaAwal++;
               console.log("angka sekarang : " + angkaAwal);
            }
            buatcounter();
            buatcounter();
            buatcounter();

         //2.
         let Uang = 0;
         function uangTabungan(pemasukan){
               Uang += pemasukan;
               console.log("tabungan ku sekarang : " + Uang);
         }
         uangTabungan(1000);
         uangTabungan(2000);

         //3.
         let KeranjangBelanja =[]
         function buatKeranjangBelanja(barang){
               KeranjangBelanja.push(barang);
               console.log("isi keranjang : " + KeranjangBelanja.join(", "))
         }
         buatKeranjangBelanja("pensil");
         buatKeranjangBelanja("penghapus");
         buatKeranjangBelanja("action figure");
            
         //4.
         let detik = 0;
         function buatTimer(timer){
            detik++;
            console.log(detik + " detik");
         }
         buatTimer();
         buatTimer();
         buatTimer();

         //5.
         const namaSiswa =[]
         function buatCatatanNama(catatan){
            namaSiswa.push(catatan);
            console.log("berikut para peraih medali emas olimpiade programming : " + namaSiswa.join(", "));
         }
         buatCatatanNama("reyhan");
         buatCatatanNama("zaki");
         buatCatatanNama("gold ship");
