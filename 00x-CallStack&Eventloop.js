// callback & event loop #1
setTimeout(() => {
  console.log('🚀', 'a');
}, 50);
setTimeout(() => {
  console.log('🚀', 'b');
}, 0);
Promise.resolve('hi~').then(console.log('🚀', 'd'));
console.log('🚀', 'c');
