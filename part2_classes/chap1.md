# Introduction

Les classes ont été introduite avec ECMAScript2015.

## Définition

Les classes sont des fonctions spéciales.

### Déclaration mot reservé class

On utilise le mot clé class suivi du nom de la classe pour définir une classe, il faut alors créer un objet à partir de la classe en créant une instance de la classe. 

Vous pouvez également définir des **setter** et **getter**, il faudra cependant faire attention au nom des attributs de classe, une méthode classique consiste à préfixer les noms par un enderscore.

Les méthodes de classe sont des simple méthode nommée, voyez l'exemple de la méthode dim ci-dessous dans la classe Rectangle :

```js
class Rectangle{
    // constructeur
    constructor(w, h){
        this._w = w;
        this._h = h;
    }

    // getter
    get area(){
        return this._w * this._h;
    }

    // setter 
    set w(w){
        this._w = w;
    }

     set h(h){
        this._h = h;
    }

    // méthode de classe
    dim(){
        return `Width : ${this._w} Height : ${this._h}`;
    }
}

let r1 = new Rectangle(10, 2);
// 20
console.log(r1.area);

r1.w = 100;
r1.h = 30;

// 3000
console.log(r1.area);

console.log(r1.dim())
```

### Héritage

Vous pouvez spécialiser une classe en héritant d'une classe parente plus générale. Rappelez-vous du principe de l'héritage en objet : une classe fille **est une sorte de** par rapport à la classe mère. Par exemple, un Lion est une sorte d'Animal. Dans ce cas la classe Lion est la classe fille de la classe Animal. C'est une spécialisation.

Pour définir une classe étendue vous devez utiliser le mot clé extends. 

Le mot clé **super** permet de faire passer des valeurs au constructeur de la classe mère.

```js
class Animal { 
    constructor(name) {
        this._name = name;
    }

    set name (name){
        this._name = name;
    }
  
    speak(){
        return `Name : ${this._name}`;
    }
}

class Lion extends Animal {
  constructor(name) {
    super(name); 
  }
}

let lion = new Lion("Shere")
lion.name = "Shere Khan";

console.log(lion.speak())
```

## Exercice Dragon & Knight

Créez deux classes Dragon et Knight et une classe Game. Dans un seul et même fichier un dragon et un chevalier s'affrontent en se portant des coups de manière aléatoire. La classe Game est composée de deux objets Dragon et Knight.

Lorsqu'un des deux adversaire n'a plus de vie la partie est terminée et le vainqueur est celui qui possède encore de la vie. 

Les classe Dragon et Knight auront :

**Attributs**

- force

- life

- shot 

- name

**Méthodes**

- hit()

La classe Game aura les attributs et méthode suivantes :

- players (new Map)

- run() <- méthode qui lancera le jeu