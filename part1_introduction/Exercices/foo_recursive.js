function foo(count = 10){

    if( count == 0 ) return "Stop" ; 

    count = count - 1 ;
    console.log(count); // affiche les différentes valeurs de count à chaque appel de la fonction

    // count--;
    // Il faut retourner la fonction à chaque fois si on veut avoir la valeur stop s'afficher à la fin
    return foo(count);

}

console.log( foo() );