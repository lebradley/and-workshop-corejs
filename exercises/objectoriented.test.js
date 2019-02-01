
// This is an exercise in design patterns

// Create a calculator object/constructor/class that takes some numbers

// And then exposes the following methods: 

// * `sum`
// * `multiply`
// * `getValueOfPI`

// For this exercise... _you_ write the tests.

// ## Part 1: Module

// Implement the above using a JS object module.
const calculatorModular = function() {
    return {
        sum: (...args) => args.reduce((agg, current) => {
            return agg += current;
        }, 0),
        multiply: (...args) => args.reduce((agg, current) => {
            return agg * current;
        }, 1),
        getValueOfPI: () => Math.PI,
    }
}


describe('my lovely calculator - modular', () => {
    test('can add', () => {
        const calc = calculatorModular();
        expect(calc.sum(1, 2)).toBe(3);
    })

    test('can add more numbers', () => {
        const calc = calculatorModular();
        expect(calc.sum(1, 2, 3, 4, 5)).toBe(15);
    })

    test('can multiply', () => {
        const calc = calculatorModular();
        expect(calc.multiply(1, 2)).toBe(2);
    })

    test('can multiply more numbers', () => {
        const calc = calculatorModular();
        expect(calc.multiply(1, 2, 3, 4)).toBe(24);
    })

    test('can get value of pi', () => {
        const calc = calculatorModular();
        expect(calc.getValueOfPI()).toBe(3.141592653589793);
    })
})

// ## Part 2: Constructor

// Implement the above using a Constructor

function Calculator(...args) {
    this.sum = args.reduce((agg, current) => {
        return agg += current;
    }, 0);
    this.multiply = args.reduce((agg, current) => {
        return agg * current;
    }, 1);
    this.getValueOfPI = Math.PI;
}

describe('my lovely calculator - constructor', () => {
    test('can add', () => {
        const calc =  new Calculator(1, 2);
        expect(calc.sum).toBe(3);
        expect(calc.memory.savedValue).toBe(0);
    })

    test('can add more numbers', () => {
        const calc = new Calculator(1, 2, 3, 4, 5);
        expect(calc.sum).toBe(15);
    })

    test('can multiply', () => {
        const calc = new Calculator(4, 5);
        expect(calc.multiply).toBe(20);
    })

    test('can multiply more numbers', () => {
        const calc = new Calculator(7, 7, 7);
        expect(calc.multiply).toBe(343);
    })

    test('can get value of pi', () => {
        const calc = new Calculator();
        expect(calc.getValueOfPI).toBe(3.141592653589793);
    })
})

// ## Part 3: Class

// Implement the above using a Class
class ClassCalculator {
    constructor() {
        // do fuck all
    }

    sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    }

    multiply(...args) {
        return args.reduce((a, b) => a * b, 1)
    }

    static getValueOfPI() {
        return Math.PI;
    }
}


describe('my lovely calculator - class', () => {
    test('can add', () => {
        const calc =  new ClassCalculator();
        expect(calc.sum(4, 5)).toBe(9);
    })

    test('can add more numbers', () => {
        const calc = new ClassCalculator();
        expect(calc.sum(1, 2, 3, 4, 5)).toBe(15);
    })

    test('can multiply', () => {
        const calc = new ClassCalculator();
        expect(calc.multiply(4, 5)).toBe(20);
    })

    test('can multiply more numbers', () => {
        const calc = new ClassCalculator();
        expect(calc.multiply(7, 7, 7)).toBe(343);
    })

    test('can get value of pi', () => {
        expect(ClassCalculator.getValueOfPI()).toBe(3.141592653589793);
    })
})

// ## Part 4: Prototypes

// Modify your above example by using a Class
function MemoryThing() {
    this.name = 'memory';
    this.memory = {
        savedValue: 0,
        radians: true,
    }
    this.clearMemory = () => this.memory.savedValue = 0;  
    this.updateMemory = (input) => this.memory.savedValue += input;
    this.useRadians = () => this.memory.radians = !this.memory.radians;
    
}

describe('Calculator with prototype of MemoryThing', () => {

    Calculator.prototype = new MemoryThing();

    test('create a calculator and make its prototype memorything', () => {
        const myCalc = new Calculator(4, 5);

        myCalc.updateMemory(myCalc.sum);
        expect(myCalc.memory.savedValue).toBe(9);

        myCalc.clearMemory();
        expect(myCalc.memory.savedValue).toBe(0);

        myCalc.useRadians();
        expect(myCalc.memory.radians).toBe(false);

    })

})