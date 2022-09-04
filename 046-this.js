/**
 * @this is the object that the function is a property of
 */

// snippets #1

const obj = {
  name: 'Billy',
  sing() {
    return 'lalala' + this.name;
  },

  singAgain() {
    this.sing() + '!';
  },
};


/**
 * @this the bennifits : execute same code for multiple objects
 */

function importantPerson(){
  console.log(this.name +. this.name + '!');
}

const name = 'Sunny'

const obj1 = {
  name: 'Cassy',
  importantPerson: importantPerson
}

const obj2 = {
  name: 'Jacob',
  importantPerson: importantPerson
}

importantPerson() // 'Sunny'
obj1.importantPerson() // 'Cassy'
obj1.importantPerson() // 'Jacob'


/**
 * @this => exercise in 047<DynamicScope.js>
 */