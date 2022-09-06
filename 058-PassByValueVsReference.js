var a = 5;
var b = a;

b++;
// snipety #1
let obj1 = { name: 'Yao', password: 123 };
let obj2 = obj1;
obj2.password = 'easypeasy';
console.log(obj1); //{name: 'Yao', password: 'easypeasy'}
console.log(obj2); //{name: 'Yao', password: 'easypeasy'}

// snippet #2
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'shalow copy wont work',
    },
};
let shalowCp1 = Object.assign({}, obj);
let shalowCp2 = { ...obj };
obj.deep = 'hhahah';

console.log(obj); // {a: 'a', b: 'b', c: {deep: 'hhahah'}}
console.log(shalowCp1); // {a: 'a', b: 'b', c: {deep: 'hhahah'}}
console.log(shalowCp2); // {a: 'a', b: 'b', c: {deep: 'hhahah'}}
// shalow copy only copy  low level
// deep level still asign to / reference to original proto chain
//To fix this only can do like this:
let superClone = JSON.parse(JSON.stringify(obj));
