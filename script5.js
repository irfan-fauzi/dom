//Dom manipulation buat elemen baru
// 1. buat elemen yang dibutuhkan misal "h1 dan labelnya"
// 2. rangkai elemennya supaya jadi satu kesatuan elemen
// 3. tempatkan ditempat yang diinginkan
const h2 = document.createElement('h2');
const teksh2 = document.createTextNode('hidup seperti larry');
// simpan tulisan ke dalam paragraf menggunakan appenChild()
h2.appendChild(teksh2);
//simpan h2baru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(h2);

//pembuatan node baru
const libaru = document.createElement('li');
const tekslibaru = document.createTextNode('jaya selalu');
libaru.appendChild(tekslibaru);

//pembuatan lokasi node baru
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

//merangkai node baru menggunakan insert before lokasi.insertbefore(nodebaru,komponensetelahnya);
ul.insertBefore(libaru, li2);


//remove child, menghapus anak komponen
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replace child, mengganti node lama , dengan node baru

//menentukan lokasi node yang akan diganti
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
//membuat komponen node baru
const h2new = document.createElement('h2');
//memberikan elemen teks pada node baru
const h2t = document.createTextNode('judulbaru');
//menyatukan elemen html dengan teks, yang baru dibuat
h2new.appendChild(h2t);
//mengganti elemen dengan fungsi replaceChild()
sectionB.replaceChild(h2new,p4);
