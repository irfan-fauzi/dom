// DOM Selector
// document.getELementById() ada di script.js
// document.getElementByClassName() 
// document.getElementByClassName()

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

//mengubah list ilem kedua menjadi abu-abu
//querySelector() ('section#b ul li:nth-child(2)') artinya : dari section yang
// ber id '#b' dengan urutan anak ke 2 dari li
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = "grey";

//document.querySelectorAll() memilih semua elemen yang ada di halaman
//document.querySelectorAll() juga mirp array
const p = document.querySelectorAll('p');
//untuk querySelectorAll() harus dikasih index untuk menandai elemen mana
p[2].style.backgroundColor = 'lightblue';
