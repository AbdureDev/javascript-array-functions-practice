const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map((char) => char.name );
console.log(names);
//2. Get array of all heights
const heights = characters.map((char) => char.height );
console.log(heights);
//3. Get array of objects with just name and height properties
const special_arr = characters.map((char) => ({
    name: char.name, 
    height: char.height,
}));
console.log(special_arr);
//4. Get array of all first names
const firstNames = characters.map((char) => char.name.split(" ")[0]);
console.log(firstNames);


//***REDUCE***
//1. Get total mass of all characters
const allMass = (characters.reduce((acl,cur) => ( acl+cur.mass) ,0))
console.log(allMass);
//2. Get total height of all characters
const allHeight = (characters.reduce((acl,cur) => (acl+cur.height), 0));
console.log(allHeight);
//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acl, cur) => {
    const color = cur.eye_color;
    if (acl[color]) {
        acl[color]++;
    }
    else{
        acl[color] = 1;
    } 
    return acl;
}, {});
console.log(characterByEyeColor);
//4. Get total number of characters in all the character names
const numOfCharacters = characters.reduce((acl,cur) => {
    return acl + cur.name.length;
}, 0)
console.log(numOfCharacters);


//***FILTER***
//1. Get characters with mass greater than 100
const massGreaterHundred = characters.filter(char => (char.mass >= 100));
console.log(massGreaterHundred);
//2. Get characters with height less than 200
const heightLessThanTowHundreds = characters.filter(char => (char.height <=200))
console.log(heightLessThanTowHundreds);
//3. Get all male characters
const maleCharacters = characters.filter(char => (char.gender ==="male"));
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(char => (char.gender ==="female"));
console.log(femaleCharacters);


//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

