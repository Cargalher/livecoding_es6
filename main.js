/* 
**Milestone 1**
Definire un array di oggetti; ogni oggetto rappresenta un gatto, 
che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, 
ciascuno con il proprio colore e il proprio nome.
*/

const gatti = [
    {nome: 'garfield', eta: 2, sesso: 'maschio', colore: 'orange'},
    {nome: 'grigia', eta: 10, sesso: 'femmina', colore: 'grey'},
    {nome: 'palla di neve', eta: 1, sesso: 'maschio', colore: 'black'},
    {nome: 'grattachecca', eta: 5, sesso: 'maschio', colore: 'blue'},
    {nome: 'silvestro', eta: 7, sesso: 'maschio', colore: 'black'},
    {nome: 'tom', eta: 6, sesso: 'maschio', colore: 'grey'},
    {nome: 'nerona', eta: 3, sesso: 'femmina', colore: 'white'},
    {nome: 'azzurra', eta: 8, sesso: 'femmina', colore: 'blue'}
];


/*
**Milestone 2**
Dividere i gatti in due contenitori distinti in base al sesso 
*/

// FILTER
/* const gattiMaschi = gatti.filter((gatto) => {
    return gatto.sesso === 'maschio'
});
//console.log(gattiMaschi);
const gattiFemmina = gatti.filter((gatto) => {
    return gatto.sesso === 'femmina'
}); */
//console.log(gattiFemmina);

/* e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, 
se femmina, o di blu, se maschio.  */




// FOREACH
let gattiMaschi = [], gattiFemmine = []; 
gatti.forEach((gatto) => {
    gatto.fiocco = 'fas fa-ribbon'
    if(gatto.sesso === 'maschio') { 
        gatto.coloreFiocco = 'blue';   
        gattiMaschi.push(gatto)
    } else {
        gatto.coloreFiocco = 'hotpink';   
        gattiFemmine.push(gatto)
    }
}); 

console.log(gattiMaschi,gattiFemmine);

/*
Il colore del fiocco deve essere più tenue se il gatto è più giovane, 
più scuro se il gatto è più vecchio.
*/

/* 
gatti.forEach(gatto => {
    if(gatto.eta < 5) {
    }
}); */



gatti.forEach((gatto) => {
    console.log(gatto.nome, gatto.colore);
    document.getElementById('container').insertAdjacentHTML('beforeend', `
         <div class="gatto">
            <i class="${gatto.fiocco}" style="color: ${gatto.coloreFiocco}; filter: opacity(${gatto.eta * 5}%)"></i>
            <i class="fas fa-cat" style="color: ${gatto.colore}"></i>
            <h3>${gatto.nome}</h3>        
        </div>
    `)
})

// MAP
/* 
let gattiMaschi = gatti.map((gatto) => {
    if(gatto.sesso === 'maschio') {
        return gatto
    } 
}); 
let gattiFemmina = gatti.map((gatto) => {
    if(gatto.sesso === 'femmina') {
        return gatto
    } 
}); 
console.log(gattiMaschi,gattiFemmine);
*/





/*
**Milestone 3**
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
inserendo solamente 
- nome e colore gatto 
- colore e opacità del fiocco
*/