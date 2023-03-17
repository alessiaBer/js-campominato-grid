/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

// seleziono l'elemento container della DOM e lo assegno a una variabile
const containerEl = document.querySelector('.container');

//seleziono l'elemento .btn dellaDOM e lo assegno ad una variabile
const playBtn = document.querySelector('.btn-info');
// assegno al btn un event listener per il click 
playBtn.addEventListener('click', function() {
    //al click:
    // attraverso un ciclo creo per ogni i una cell
    for (let i = 1; i <= 100; i++) {
        // creo nella DOM un elemento div e lo assegno ad una variabile
        const cellEl = document.createElement('div');
        //aggiungo all'elemento la classe .cell
        cellEl.classList.add('cell');
    
        //assegno all'interno della cell l'html corrispondente al suo index
        cellEl.innerHTML = `${i}`;
        console.log(cellEl);

        //appendo le cell create all'elemento container
        containerEl.append(cellEl);
}
})





