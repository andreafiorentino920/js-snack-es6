// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bici = [
    {
        "nome" : "bianchi",
        "peso" : 13
    },
    {
        "nome" : "legnano",
        "peso" : 9
    },
    {
        "nome" : "graziella",
        "peso" : 7
    },
    {
        "nome" : "legnano",
        "peso" : 10
    }
]
let bicileggera = bici[0];
for (let i=1;i < bici.length;i++){
    if(bici[i].peso < bicileggera.peso){
        bicileggera = bici[i];
    }
}
const {nome,peso} = bicileggera;
console.log(`La bici più leggera è ${nome} e pesa ${peso} kg`);
