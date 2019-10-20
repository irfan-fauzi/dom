//mengganti scope node root nya supaya lebih selektif komponen / section mana yang akan di edit
//mempersempit scope pencarian
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';