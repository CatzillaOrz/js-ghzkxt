/**
 * @call
 * @apply
 * @bind
 */

// snippets #1
/**
 * @call
 * # Basicly > a() is short for a.call();
 */
function a() {}

// a() === a.call()

// snippets #2

/**
 * @call
 */

const wizard = {
  nmae: 'Merlin',
  health: 100,
  heal() {
    return (this.health = 100);
  },
};

const archer = {
  name: 'Robin Hood',
  health: 30,
};
console.log('1', archer); // {...health: 30}
wizard.heal.call(archer); //
console.log('2', archer); // {...health: 100}

/**
 * @apply
 */

wizard.heal = (num1, num2) => {
  return (this.health += num1 + num2);
};

wizard.heal.call(archer, 20, 50); // .call(object, arg1,arg2)
wizard.heal.apply(archer, [20, 50]); // .apply(object, [arg1, arg2])
