//script 4 , materi manipulasi dom
//merubah isi dari elemen HTML

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>irfan</em>';
// judul.style.color = 'lightblue';
// judul.style.backgroundColor ='salmon';
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML ='hello';

//modifikasi attribut
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'sandika');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'wer');

// fungsi setAttribut() akan mengganti attribut html, bukan menambahkannya
// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');
// jadi maksud saya ,jika ingin mengelola class maka gunakan elem.classList
const p2 = document.getElementsByTagName('p')[1];
p2.classList.replace('p2','sayonara');
