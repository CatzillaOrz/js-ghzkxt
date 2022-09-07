// Constructor Functions #1
function Elf(name, weapon) {
    console.log(this); // Elf{}
    this.name = name;
    this.wapon = weapon;
    console.log(this); //Elf {name: 'Peter', wapon: 'stones'}
}

const peter = new Elf('Peter', 'stones');

// #2
const Elf1 = new Function('name', 'weapon', `this.name=name;this.weapon = weapon;`);
const sarah = new Elf1('Sarah', 'fireworks');
