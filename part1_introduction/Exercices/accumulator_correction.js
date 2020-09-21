


function accumulator(numbers, acc = 0) {

    // on arrête la fonction lorsqu'on n'a plus rien dans le tableau
    if( numbers.length == 0 ) return acc ;
    
    const number = numbers.shift();
    // on premier appel acc vaut 0 puis on lui ajoute 1, puis 1 + 2 , 3 + 3, 6 + 4, ...
    acc = acc + number ;
    console.log(number, acc);

    return accumulator(numbers, acc);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// return le résultat 
let total = accumulator(numbers);

console.log(total); // On doit trouver 55
