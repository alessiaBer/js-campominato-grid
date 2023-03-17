/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

// seleziono l'elemento container della DOM e lo assegno a una variabile
const containerEl = document.querySelector('.container');

//seleziono l'elemento .btn dellaDOM e lo assegno ad una variabile
const playBtn = document.querySelector('.btn-info');

// attraverso un ciclo creo per ogni i una cell

const options = document.getElementById('levels');

for (let i = 0; i < options.length; i++) {
    const thisOption = options[i].value;
    console.log(thisOption);

    /* 
    thisOption.addEventListener('click', function(){
        if (thisOption.value === 1) {
       level1(); 
        console.log('1')
        } else if (thisOption.value === 2) {
        level2();
        console.log('2')
        } else if (thisOption.value === 3) {
        level3(); 
        console.log('3');
        }

    }) */
}



function level1() {
    for (let i = 1; i <= 100; i++) {
        // creo nella DOM un elemento div e lo assegno ad una variabile
        const cellEl = document.createElement('div');
        //aggiungo all'elemento la classe .cell
        cellEl.classList.add('cell');
        cellEl.style.width = 'calc(100% / 10)';
    
        //assegno all'interno della cell l'html corrispondente al suo index
        cellEl.innerHTML = `${i}`;

        //appendo le cell create all'elemento container
        containerEl.append(cellEl);
}}

function level2() {
    for (let i = 1; i <= 81; i++) {
        // creo nella DOM un elemento div e lo assegno ad una variabile
        const cellEl = document.createElement('div');
        //aggiungo all'elemento la classe .cell
        cellEl.classList.add('cell');
        cellEl.style.width = 'calc(100% / 9)'
    
        //assegno all'interno della cell l'html corrispondente al suo index
        cellEl.innerHTML = `${i}`;

        //appendo le cell create all'elemento container
        containerEl.append(cellEl);
}}

function level3() {
    for (let i = 1; i <= 49; i++) {
        // creo nella DOM un elemento div e lo assegno ad una variabile
        const cellEl = document.createElement('div');
        //aggiungo all'elemento la classe .cell
        cellEl.classList.add('cell');
        cellEl.style.width = 'calc(100% / 7)';
        //assegno all'interno della cell l'html corrispondente al suo index
        cellEl.innerHTML = `${i}`;

        //appendo le cell create all'elemento container
        containerEl.append(cellEl);
}}

// assegno al btn un event listener per il click 
playBtn.addEventListener('click', function() {
    //al click:

    //per ripulire ogni volta la pagina
    containerEl.innerHTML = '';


    //seleziono tutte le celle e le assegno ad una variabile
    const cells = document.querySelectorAll('.cell');

    // ciclo dentro alla variabile cells per selezionare ogni cella
    for (let i = 0; i < cells.length; i++) {
        //seleziono ogni singola casella e la assegno ad una variabile
        const thisCell = cells[i];

        //aggiungo un event listener al click
        thisCell.addEventListener('click', function() {
            //toggle la classe background azzurro
            thisCell.classList.toggle('bg_light_blue');
            //console log il numero della casella
            console.log(`hai cliccato la casella ${thisCell.innerHTML}`);
        })
    }
})


















