# Introduction aux structures de données

## Les tableaux

Vous pouvez définir un tableau simplement à l'aide de crochet :

```js
let fruits =  ['Apple', 'Orange'];
```

### Exercice reference array

1. Reprenez la variable fruits ci-dessus que vaut le console.log dans l'exemple suivant, affichez le contenu des deux tableaux :

```js
let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits.length === fruits.length)
```

2. Ecrivez un script pour créez un nouveau tableau newFruit qui n'a pas la même référence que fruits.

## Copie d'un tableau

Si vous assignez un tableau t1 dans une variable t2 alors JS ne crée pas un nouveau tableau. t2 a la même référence mémoire que t1. Modifiez un des deux tableaux t1 ou t2 modifiera alors l'autre. 

## Fonction map

Syntax i est un compteur et curr est la valeur courant du tableau arr ci-dessous :

```js
arr.map((curr, i) => console.log(i, curr));
```

La méthode map crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément du tableau :

```js
const sheeps = ['🐑', '🐑', '🐑'];

const newSheeps = sheeps.map( sheep => sheep + sheep );
 // ["🐑🐑", "🐑🐑", "🐑🐑"]
```

### Exercice copie de fruits

Proposez une solution pour copier le tableau fruits en utilisant map.


### Exercice square numbers

Ecrire un script, qui utilise map, qui permet d'élever au carré les nombres de la liste suivante :

```js
let numbers = [1, 8, 3, 7];
```

### Exercice mult number 

Ecrire une fonction qui multiple par 3 les nombres pairs et par 5 les nombres impairs de la liste des nombres suivants :

```js

let numbers = [7, 9, 10, 1, 2, 3, 71, 8 ];
```

### Exercice string

Faite un script qui prend en argument un texte et qui retourne un tableau des valeurs du nombre de caractères de chaque mot. 

Indication : utilisez la méthode split pour transformer la chaîne en tableau.


## Méthode spread pour copier un tableau

Vous pouvez utiliser la méthode spread pour faire une copie peu profonde d'un objet :

```js
let numbers = [7, 9, 10, 1, 2, 3, 71, 8 ];

let cloneNumbers = [ ...numbers ];

```

Le spread operator ne marchera pas sur des objets plus complexes (imbriqués).


## Map

Un objet Map est une collection de paires clé/valeur qui peut utiliser n'importe quel type de données comme clé et peut maintenir l'ordre de ses entrées. Il n'y a pas de notion d'ordre.


```js
const jedi = new Map()

```

### Ajoutez des valeurs dans un Map 

```js
jedi.set('firstName', 'Luke')
jedi.set('lastName', 'Skywalker')
jedi.set('job', 'Jedi Master')
```

Vous pouvez également ajouter des valeurs dans un map à l'aide d'un tableau de tableaux:

```js
const jedi = new Map([
  ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['job', 'Jedi Master'],
])
```

Quelques fonctions utiles sur les maps :

```js

// rechercher une clé 
jedi.has('shark') // false

// accéder à une valeur à partir de sa clé
jedi.get('firstName')

// taille du map
jedi.size

// supprimer un élément
jedi.delete('firstName');

// tout supprimer
jedi.clear()

// les keys et values
jedi.keys()
jedi.values()
// les deux 
jedi.entries()
```

### Itération sur un Map

- à l'aide d'un for of

```js
for (const [key, value] of jedi) {
  console.log(`${key}: ${value}`)
}
```

- à l'aide d'un foreEach 

```js
jedi.forEach(( v, k ) =>  console.log(v, k));
```

### Exercice average Map 

1. En utilisant les données DataStudents ci-dessous, créez un Map puis calculer la moyenne de chaque étudiant. Vous utiliserez la clé average du tableau DataStudents. 

2. Créez un script qui permet d'ajouter un étudiant avec une clé sX ou X est un nombre, vérifiez avant l'ajout que la clé n'existe pas.



```js

const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
        "s4",
        {
            "name": "Naoudi",
            "mention": "",
            "notes": [14.5, 19, 18],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];
```