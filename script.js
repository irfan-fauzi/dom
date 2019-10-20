//DOM selection
// documnt.getElementById() -> element , mengembalikan elemant
const judul = document.getElementById('judul');
//variabel judul sudah menjadi object siap dimanipulasi 
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'irfan';

// document.getElementsByTagName() mengembalikan -> HTMLCollections
// mirip array
const p = document.getElementsByTagName('p');
//bisa mengganti semua elemenHtml atau salah satu, dengan cara ini
// p[0].style.backgroundColor = 'blue';
// p[1].style.backgroundColor = 'blue';
// p[2].style.backgroundColor = 'blue';
// p[3].style.backgroundColor = 'blue';

//atau kita bisa looping menggunakan for , layaknya sebuah array *
 for ( let i = 0; i < p.length ; i++ ){
 	p[i].style.backgroundColor = 'blue';
 }

// document.getElementsByClassName() mengembalikan -> HTMLCollections
const p1 = document.getElementsByClassName('p1');
