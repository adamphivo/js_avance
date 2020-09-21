const pricesHT = [100, 200, 55];

function sumTTC(p1, p2, p3, tva = .2) {
    // il faut vérifier les trois paramètres de type number
    if (isNaN(parseInt(p1))
        || isNaN(parseInt(p2))
        || isNaN(parseInt(p3))
    ) return "Error Type"; // TODO lancer une exception plutot...

    return (p1 + p2 + p3) * (1 + tva);
}

console.log(sumTTC(...pricesHT));