/**
 * @this
 */

var b = {
  name: 'jay',
  say() {
    console.log(this);
  },
};

var c = {
  name: 'jay',
  say() {
    retrun(function () {
      console.log(this);
    });
  },
};

var d = {
  name: 'jay',
  say() {
    return () => console.log('this🚀', this);
  },
};

// #1
b.say(); // {object b}
c.say()(); // {Window} because of dynamically scoped this.
d.say()(); // undefined
