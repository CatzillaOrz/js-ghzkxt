/**
 * @this
 */

const a = function () {
  console.log('a', this);
  const b = function () {
    console.log('b', this);
    const c = {
      hi: function () {
        console.log('c', this);
      },
    };
    c.hi();
  };
};

// log:
a();

// a > Window
// b > Window
// c > {hi: ƒ}

/**
 * @this
 * In javascript our lexical scope(available data + variables where the funcion was defined) determines our available variables. Not where the function is called(dynamic scope)
 */

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anthoerFunc = function () {
      console.log('b', this);
    };
    anotherFunc();
  },
};

obj.sing();
// a {name: "Billy", sing: ƒ}
// b Window
