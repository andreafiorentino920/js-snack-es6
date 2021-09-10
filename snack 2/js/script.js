// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const generaNumeri = (max) => Math.floor(Math.random() * max )
const squadre = [
    {
        nomeSquadra: "Juventus",
        puntiFatti: generaNumeri(50),
        falliSubiti: generaNumeri(80)
    },
    {
        nomeSquadra: "Inter",
        puntiFatti: generaNumeri(50),
        falliSubiti: generaNumeri(80)
        
    },
    {
        nomeSquadra: "Lecce",
        puntiFatti: generaNumeri(50),
        falliSubiti: generaNumeri(80)
    },
    {
        nomeSquadra: "Torino",
        puntiFatti: generaNumeri(50),
        falliSubiti: generaNumeri(80)
    },
    {
        nomeSquadra: "Palermo",
        puntiFatti: generaNumeri(50),
        falliSubiti: generaNumeri(80)
    }
];
console.log(squadre);
var arrayNuovo = [];
for(let i=0; i<squadre.length;i++){
    const {nomeSquadra,falliSubiti} = squadre[i];
    arrayNuovo.push({nomeSquadra,falliSubiti});
}
console.log(arrayNuovo);

