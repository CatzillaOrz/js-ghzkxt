/**
 * @default Higher Order Function => HOF
 * @description A function return A funtion
 */

const giveAccessTo = (name) => 'Access Granted to ' + name;

function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return giveAccessTo(person.name);
}

function sing(person) {
    return 'lalala my name is' + person.nmae;
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        return fn(person);
    } else if (person.level === 'user') {
        return fn(person);
    } else {
        return fn(person);
    }
}

letPerson({ level: 'admin', name: 'Sally' }, sing);
