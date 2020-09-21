
const phones = [
    { name: 'iphone XX', priceHT: 900 },
    { name: 'iphone X', priceHT: 700 },
    { name: 'iphone B', priceHT: 200 }
];

const VAT = .2;

const phonesTTC = phones.map(phone => phone.priceHT * (1 + VAT));

console.log(phonesTTC);

// Plus d'information avec le nom du téléphone cette fois-ci
const phonesPriceTTC = phones.map(phone => {
    return {
        name: phone.name,
        priceTTC: phone.priceHT * (1 + VAT)
    };
});

console.log(phonesPriceTTC);

// Syntax plus expressive simple à écrire :
const phonesPriceTTC_Better = phones.map(phone => ({ name: phone.name,priceTTC: phone.priceHT * (1 + VAT) }) );
console.log(phonesPriceTTC_Better);