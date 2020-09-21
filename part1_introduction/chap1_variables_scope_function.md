# Introduction

JS est un langage de script, orienté objet. Principalement exécuté dans une page Web, on le retrouve aujourd'hui dans d'autres contextes comme : Node.js, MongoDB (on peut programmer des requêtes en JS), ...

JS suit la norme **ECMAScript**, standard que suivent certains langages de script comme Javascript. Cette norme évolue. Les principaux navigateurs Web implémentent ces normes pour le JS. 

Une version majeur d'ECMAScript est celle qui a été définie en 2015 : ES2015 que l'on appelle fréquemment ES6 ... Le nom de la version étant déterminé par la dernière version du standard en cours donc ES6 pour 2016 ... Aujourd'hui la dernière version officiel est EMACScript 2020.

Bien que JS est un langage faiblement typé, le typage est partout... 

Le type d'une variable peut changé dans un script, il est déterminé par son contexte d'affectation. La variable **n** est déterminé par JS de type number lors de son assignation. Nous utilisons l'opérateur typeof pour déterminer le type d'une variable.

```js
let n = 10;
console.log(typeof n); // number

// ré-assignation
n = "Hello";

console.log(typeof n); // string
```

Dans l'exemple ci-dessus le type de la variable n a changé, n est passé du type number à string.

Notons que lorsque vous définissez une variable sans lui affecter une valeur particulière, celle-ci est de type "undefined" :

```js
let username;
console.log(typeof username); // undefined
```

## Les différents types JS

On distingue les types suivants en Javascript. Attention tous les types primitifs définissent des valeurs immuables (que l'on ne peut modifier) :

### 1. Types primitifs 

- boolean

```js

// On ne peut modifier un "true" ...
let flag = true;
```

- null

```js

// On ne peut modifier un "null" ...
let flag = null;
```

- undefined

- number

- bgint (un nouveau type dans ES2020 )

Il faut ajouté l'opérateur **n** pour définir des BigInt

```js
const x = 2n ** 100n;
console.log(x)
// 1267650600228229401496703205376n
```

- string

```js

// On ne peut modifier la chaîne de caractères "Hello World" ...
let message = "Hello World";
```

- symbole (type introduit à partir de la norme ES6, un peu technique pour l'instant ...)


------

### 2. Les types Objects

Et de manière un peu différente on a le type 0bject. Ils sont mutables, on peut modifier un objet. Rappelons ici qu'un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un identifant. Nous reverrons ce point qui est important dans le code lorsqu'on manipule des objets.

Dans la liste des objets vous avez :

- Les objets classiques et les fonctions (ce sont des objets ...En JS)

```js
class Model {

    constructor(name){
        this.name = name;
    }

    get() {

        return this.name;
    }
}

const myModel = new Model;

function modelFunc(n){
    let name = n;

    return name;
}
```

- Les objets natifs comme les dates

```js
const now = new Date();
```

- Les collections comme les tableaux

Les déclarations suivantes sont identiques :

```js
let notes = [1, 2, 3];
let newNotes = new Array(1, 2, 4);
```

- Les collections avec clés : Map, Set, ...

Un Map est une simple collection clé/valeur. Ces structures de données utilisent des clés pour référencer des valeurs, chaque clé est unique. Les Set sont des structures de données proche de la notion d'ensemble Mathématiques.

```js
// création d'un Map
const store = new Map();

store.set("A1", 10.6); 
store.set("A2", 8.9);

console.log(store); 
// {"A1" => 10.6, "A2" => 8.9}

const ensemble = new Set([1, 2, 3, 4, 5, 5]);
```

- Les JSON Javascript Object Notation

## Portée (ou scope en Anglais) des variables en JS

Nous n'utilisons pas le mot réservé var pour définir une variable et utiliserons à la place le mot reservé **let** qui a été introduit pour donner plus de cohérence. 

Pour déclarer une variable nous utiliserons le mot réservé du langage **let** en JS. *La variable définie avec let a une portée scopée au niveau du bloc dans lequelle elle a été déclarée.*

*Remarque importante : lorsque vous définissez une variable à l'intérieur d'une fonction elle est scopée (portée) dans la fonction elle-même.*

```js

function foo(){

    let a = 10;
    console.log(a); // affiche 10
}

foo()

// erreur du type ReferenceError pas d'effet de bord
console.log(a); 

```

Si vous définissez une variable **de même nom** à l'extérieur de la fonction alors, elle n'aura pas d'effet sur la variable à l'intérieur de la fonction.

```js

let a = 11 ;

function foo(){

    let a = 10;
    console.log(a); // affiche 10
}

// affiche 10 
foo()

// affiche 11
console.log(a);

```

Un autre exemple important :

```js
// bloc courant pour b
let b = 11;

function baz(){
    // bloc courant pour c
    let c = 9; 

    // JS ne trouve pas b dans le bloc courant => il remonte les blocs ou scopes
    console.log(b, c);
}

// affiche 11 9
baz();

```

JS remontera tous les scopes pour retrouver le symbole appelé et sa valeur. Si il n'existe pas une erreur **ReferenceError** est levée.

```js
// bloc courant 
let b = 11;

function baz(){

    console.log(b);

    function foo(){

        console.log( "Valeur du symbole b : " , b )
    }

    foo();
}

// affiche 11
baz();

```

## Exercice scope calcul

Sans exécutez le code ci-dessous dire si celui est valide ou non ? Modifiez le code pour qu'il s'exécute dans le cas où celui-ci ne serait pas valide.

```js

let a = 1 ;

function calcul(){

    let a = 2 + a ;

    console.log( a  , "calcul" );

    function sub_calcul(){
        let b = a + 1;

        console.log(b  , "sub_calcul");
    }

    sub_calcul();
}

calcul();

```

## Exercice TDZ

Est ce que le code suivant est valide ? 

```js
function tdz(){
    console.log(tdz);

    let tdz = "Temporal Dead Zone" ;
}

tdz();
```

## Exercice for let

Est ce que le code ci-dessous va s'exécuter correctement ?

```js
let i = 10;

for (let i = 0; i < 10; i++) {
    
    console.log(i);
}
```

Qu'affichera le code suivant à votre avis ? Répondez sans exécuter le code :

```js
for (let j = 0; j < 10; j++) {}
console.log(j);
```

## Déclaration d'une constante

Le mot réservé du langage JS **const** permet de définir une constante, il est identique au let concernant la portée et permet de déclarer une variable à assignation unique. Notons que dans le cas d'une constante vous êtes également obligé de lui assigner une valeur lors de sa déclaration.

```js
const API_KEY = "ABf#123@";

console.log(API_KEY); 
```

Une fois API_KEY définie vous ne pouvez pas re-définir cette variable ni même lui assigner une autre valeur.

Remarque importante, une constante peut contenir tout type de variable. Dans le cas d'un objet comme un tableau par exemple, les valeurs du tableau sont modifiables. En effet, une constante bloque la ré-assignation de la variable mais, ne rend pas l'objet immuable.

Vous pouvez donc effectuer les opérations suivantes sur la constantes STUDENTS

```js

const STUDENTS = ['Alan', 'Bernard', 'Jean' ];

STUDENTS.push('Sophie');

console.log(STUDENTS);
//["Alan", "Bernard", "Jean", "Sophie"]

STUDENTS.pop();

console.log(STUDENTS);
// ["Alan", "Bernard", "Jean"]

```

Par contre ce qui suit est impossible, l'erreur suivante sera levée : 
TypeError: Assignment to constant variable.

```js

let newStudents = ['Alice'];

// bloqué au niveau de la référence impossible 
// ré-assignation 
STUDENTS = newStudents;

```


## Exercice const

1. Pouvez utilisez à votre avis le mot réservé const dans la boucle suivante ?

```js
for (const j = 0; j < 10; j++) {}
```

2. Utilisez la syntaxe de boucle for of et const sur l'itérable STUDENTS et affichez (console.log) ses valeurs :

```js
const STUDENTS = ['Alan', 'Bernard', 'Jean' ];

```

## Fonction

### Paramètres par défaut

Lorsque vous définissez une fonction avec des paramètres, vous pouvez donner des valeurs par défaut à certain(s) de ses paramètre(s).

```js
function add(a, sup = 1) {
  return a + sup;
}

add(10); // affiche 11 

add(10, 0); // affiche 10

```

### Exercice ttc 

Créez une fonction qui permet de calculer un prix ttc connaissant un prix HT. Donnez une valeur par défaut tva en paramètre de la fonction. Fixez cette tva par défaut à 20%.

### Exercice accumulator (**)

Créez une fonction récursive qui s'appelle elle-même, elle prendra deux arguments : un tableau de nombre et un accumulateur initialement égale à 0. Cette fonction retournera la somme des valeurs du tableau.

Utilisez la méthode shift() sur le tableau. Il permet de dépiler la première valeur du tableau. Dans votre fonction récursive définissez une condition d'arrêt, sinon la fonction continuera de s'appeler indéfiniment (Stack Overflow). 

Voyez les exemples suivants pour vous aidez à faire cette exercice :


```js

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// retourne la première valeur du tableau en la supprimant du tableau
numbers.shift();

function accumulator(numbers, acc = 0 ){

}

console.log(accumulator(numbers)); // doit retourner 55

```

## Syntaxe par décomposition

Si vous avez une fonction avec de nombreux paramètres ou des paramètres variables, utilisez le spread operator pour passer les valeurs à la fonction

```js
function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

sum( ...numbers ) ; // sum(1, 2, 3)
 
```

### Exercice sum spread ttc

Ecrivez une fonction sumTTC qui prend 3 nombres arbitraires de prix HT et retourne la somme de ces prix TTC, la tva sera un paramètre facultatif de la fonction. Les prix HT seront donnés dans un tableau :

```js
const pricesHT = [100, 200, 55];
```

## Fonction fléchée

Les fonctions fléchées (arrow function) permettent d'avoir une syntaxe plus courte pour définir une fonction et ces fonctions ne possèdent pas de this par exemple. Si vous vous référez dans une fonction fléchée au mot clé this, la fonction récupérera le this du contexte de définition de la fonction.

Exemples :

```js
const sum = (x, y, z) => {

    return x + y + z;
}

```

Lorsque vous avez un seul résultat à retourner, une autre syntaxe plus courte mais complétement équivalent à celle ci-dessus :

```js

// methode consise
const sum = (x, y, z) => x + y + z ;

// bloc classique, retour explicite
const sum2 = (x, y) => { return x + y; }
```

### Exercice counter arrow

Créez une fonction non fléchée qui lancera un compteur qui s'incrémente de +1 toutes les secondes. Vous partirez du code suivant :

```js

function Counter(){
    this.count = 0;
}

```

Utilisez un setInterval et incrémentez la variable count de la fonction Counter.