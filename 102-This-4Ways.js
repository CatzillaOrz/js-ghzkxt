// implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name);
    },
};

// explicit binding
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        console.log('hi' + this.name);
    }.bind(window),
};

// arrow function
const person4 = {
    name: 'Karen',
    age: 40,
    hi() {
        var inner = () => {
            console.log('hi' + this.name);
        };
        return inner();
    },
};
