// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter. 

const spliceArray = (arr,a,b) => {
    const arrTmp = [];
    arr.forEach(
        (elm, i) => {
            if(i >= a && i <=b){
                arrTmp.push(elm);
            }
        }
    );
    return arrTmp;
}

const arr = [10,20,30,40,50,60,70];
let numero1= prompt("Inserire un numero da 1 a 7");
let numero2= prompt("Inserire un numero da 1 a 7");
const newArr = spliceArray(arr, numero1, numero2);
console.log(newArr);
