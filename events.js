// event pada JS , merepresentasikan sebuah kejadian yang terjadi didalam DOM
// bisa dilakukan oleh usr (mouse event, keyboard event , dll)

// atau dilakukan secara otomatis oleh API
// contoh (animasi selesai dijalankan, halaman selesai di load, dll)
 // cara mendengarkan event
 // 1. event hendler
 //       inline HTML attribut
 //       elemen method
 // 2. addEventListener()

 //contoh event hendler
// seperti biasa, pilih komponen yang akan di ubah
// const p3 = document.querySelector('.p3');
//  function ubahWarna(){
//      p3.style.backgroundColor = 'lightblue';
// }
// // eksekusi dengan menggunakan onclick (ketika di klik maka function ubahwarna akan berjalan)
// p3.ondclick = ubahWarna;

// contoh event Listener
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];

// function tambahTeks() {
//     //menambahkan node (elemen html) baru
//     const liBaru = document.createElement('li');
//     //membuat teks pada elemen htmlnya
//     const teksLibaru =document.createTextNode('hidup seperti larry');
//     //menyatukan teks dengan node(elemen html)
//     liBaru.appendChild(teksLibaru);
//     //pembuatan lokasi node baru
//     const ul = sectionB.getElementsByTagName('ul')[0];
//     const li2 = ul.querySelector('li:nth-child(2)');
//     //merangkai node baru
//     ul.insertBefore(liBaru, li2); 
// }
//  p4.addEventListener('click', tambahTeks );

 const p3 = document.querySelector('.p3');
 p3.addEventListener('mouseenter', function(){
     p3.style.backgroundColor = 'lightblue';
 });

 p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'white';
 });
