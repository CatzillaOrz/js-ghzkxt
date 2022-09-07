// Constructor Functions #1
function Elf(name, weapon) {
    this.name = name;
    this.wapon = weapon;
}

const peter = new Elf('Peter', 'stones');

// #2
const Elf1 = new Function('name', 'weapon', `this.name=name;this.weapon = weapon;`);
const sarah = new Elf1('Sarah', 'fireworks');
