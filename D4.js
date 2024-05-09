//---------------------------------------------------------------"ESERCIZIO" 1 --------------------------------------------------------------------------------------------

// Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.

function area(l1,l2) {

    return l1 * l2     
}
 console.log("L'area del rettangolo è:",area(6 , 3))



//---------------------------------------------------------------ESERCIZIO 2--------------------------------------------------------------------------------------------

// Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
//La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
//la loro somma moltiplicata per tre.

function crazySum(num1,num2) {
    if (num1 != num2) {
        return num1 + num2
    } else{
        return (num1 + num2) * 3 
    }

}
const x = crazySum (2,2) 
console.log("il risultato è:",x)

//---------------------------------------------------------------ESERCIZIO 3--------------------------------------------------------------------------------------------

//Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
//Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.

function crazyDiff(num) {
    if (num <= 19) {
        return num - 19
        } else{
            return (num -19)*3
        }
    }

    const diffAssoluta = crazyDiff (22)
    console.log("Il risultato della differenza assoluta è:", diffAssoluta)

//---------------------------------------------------------------ESERCIZIO 4--------------------------------------------------------------------------------------------
//Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
//se n è uguale a 400.

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    }else{
        return false
    }
    
}
const intero1 = boundary (90)
console.log(intero1)

//---------------------------------------------------------------ESERCIZIO 5--------------------------------------------------------------------------------------------
//Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
//La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
//ritornare la stringa originale senza alterarla.
let stringa = "è una scuola" 

function epify(stringa) {

    let newStringa = stringa.split(" "); // Divide le parole

    if (newStringa[0] === "EPICODE") { 
        return newStringa.join(" ")
    }else{
        newStringa.unshift("EPICODE");
        return newStringa.join(" ")
    }
    
}
console.log(epify(stringa))

//---------------------------------------------------------------ESERCIZIO 6--------------------------------------------------------------------------------------------
//Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
//di 3 o di 7. (Suggerimento: usa l'operatore modulo)


function check3and7(n) {
    if(n > 0){
        if (n % 3 === 0 || n % 7 === 0) {                           // % se restituisce 0 è divisbile se restituisce 1 non è divisibile
            console.log("il numero",n,"è divisibile per 3 o 7 ")
            
        }else{
            console.log("il numero non è divisibile per 3 o 7")
        }

    } else{
        console.log("non è un numero positivo")
    }
    
}
let check = check3and7(6)

//---------------------------------------------------------------ESERCIZIO 7--------------------------------------------------------------------------------------------
//Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")

function reverseString(rvs) {
    let splitString = rvs.split("")
    let reverseS = splitString.reverse()
    let newString = reverseS.join("")
    console.log(newString)
    }

let StringProva = reverseString("PROVIAMOCI") 

//---------------------------------------------------------------ESERCIZIO 8--------------------------------------------------------------------------------------------
//Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
//La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.


/* SCRIVI QUI LA TUA RISPOSTA */

//---------------------------------------------------------------ESERCIZIO 9--------------------------------------------------------------------------------------------
//Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
//della stringa originale.


/* SCRIVI QUI LA TUA RISPOSTA */

//---------------------------------------------------------------ESERCIZIO 10--------------------------------------------------------------------------------------------
//Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.


/* SCRIVI QUI LA TUA RISPOSTA */
 