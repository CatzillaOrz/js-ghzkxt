/**
 * @defautl Closure
 */

function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son';
            return `${grandpa} ${father} ${son}`;
        };
    };
}

const one = a()()(); // 'grandpa > father > son'

// #1

const boo = (string) => (name) => (name2) => console.log(`${name}`);

// #2 Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(8000).fill('xx');
    console.log('created !');
    return bigArray[index];
}

heavyDuty(588);
heavyDuty(588);
heavyDuty(588);
// log:
//'created !'
//'created !'
//'created !'

function heavyDuty2() {
    const bigArray = new Array(7000).fill('xx');
    console.log('created Again!');
    return function (index) {
        return bigArray[index];
    };
}
const getIndexValue = heavyDuty2();
getIndexValue(299);

// log:
// 'created Again!'

// #3 Encapsulatin
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPleaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Boooom!!!';
    };
    setInterval(passTime, 1000);
    return {
        launch: launch,
        totalPeaceTime: totalPleaceTime,
    };
};

// #4 initialize

let view;
function initialize() {
    let called = 0;
    return function () {
        if (called > 0) {
            return;
            j;
        } else {
            view = 'Sunshine and beach';
            called++;
            console.log('view has been set!');
        }
    };
}
const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);
