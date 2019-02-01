// ## Implement .reduce
// Should take an array of values and apply the callback
// **Bonus Point:** Do this with recursion
// (https://lodash.com/docs/4.17.10#reduce)

// ## Implement .map
// Now, implement .map
// **Bonus Point:** Do this whilst _using reduce_
// (https://lodash.com/docs/4.17.10#map)

// ## Implement .memoize
// Should pick a property from an object
// (https://lodash.com/docs/4.17.10#memoize)

// ## Implement .defaults
// Takes two arguments, an original object and a set of defaults
// Returns the amalgamation of both
// (https://lodash.com/docs/4.17.10#defaults)

// ## Implement .throttle
// Implement a throttle (that doesn't queue, but drops if the previous throttle is running)
// (https://lodash.com/docs/4.17.10#throttle)

// ## Implement .curry
// Implement a function that curries the function given to it
// (https://lodash.com/docs/4.17.10#curry)

// Takes in an original array and a callback function TICK
// Creates a new array FUCKING TICKED
// Takes each thing from original array 
// Uses the callback function to do something to each thing
// Adds this new this to new array
// returns the new array


function mapFunction(array, callback) {
    let returnArray = [];
        for(let i = 0; i < array.length; i++) {
            returnArray.push(callback(array[i]));
        }
        return returnArray;
}

// Takes in array, callback, and optional number starting value
// Doing callback on each item in the array
// Add starting value onto result of callback
// Returns a number and does not change the original array

function reduceFunction(array, callback, start=0) {
    let prev = start;
    for(let i=0; i < array.length; i++) {
        let number = callback(prev, array[i]);
        prev = number;
        console.log(number);
    }
    return prev;

}

// Memoise functiony stuff
// Oh deep joy it's closures... 
// somewhere the child knows about what's passed to parent
// so the cache needs to go in there somewhere
 
// Key functioncall and param, value would be the answer of that

function memoiseFunction(inputFunction) {
    let cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        const results = inputFunction(...args);
        cache[args] = results;
        return results;
    }
}

// Puts some objects together - left join
// Does not overwrite the left hand side one
// Reverse of {...this, ...that}

function defaultFunction(obj1, ...args) {
    return Object.assign(...args, obj1);
}

// Throttles take params of function, time out and options
// function can only call once within the timeout period
// If called twice within the timeout it is ignore

function throttleFunction(func, timeout) {
    let startTime = 0;
    return function() {
        const newTimestamp = new Date().getTime();
        
        if(newTimestamp - startTime > timeout) {
            const res = func();
            startTime = newTimestamp;
            return res;
        }
        return;
    }
}

const _ = { 
    map:  mapFunction,
    reduce: reduceFunction,
    memoize: memoiseFunction,
    defaults: defaultFunction,
    throttle: throttleFunction,
    curry: () => {},
};

describe('_.map', () => {
    test('Can concatenate a string as part of a map', () => {
        expect(
            _.map(['Graham', 'Sarah', 'Bob'], (name) => `The ${name}`)
        ).toEqual(
            ['The Graham', 'The Sarah', 'The Bob']
        );
    });
    test('Can map an array with data objects', () => {
        expect(
            _.map([{ name: 'Lou' }], (person) => person.name)
        ).toEqual(
            ['Lou']
        );
    });
    test('does not mutate', () => {
        const originalValues = ['Graham', 'Sarah', 'Bob'];
        expect(_.map(originalValues, (name) => `The ${name}`)).toEqual(['The Graham', 'The Sarah', 'The Bob']);
        expect(originalValues).toEqual(['Graham', 'Sarah', 'Bob']);
    });
});

describe('_.reduce', () => {

    test('Reduces an array without a default', () => {
        const result = _.reduce([{ age: 12 }, { age: 13 }], (prev, item) => { prev = prev + item.age; return prev; });
        expect(result).toEqual(25);
    });

    test('Reduces an array, starting with 10', () => {
        const result = _.reduce([{ age: 12 }, { age: 13 }], (prev, item) => { prev = prev + item.age; return prev; }, 10);
        expect(result).toEqual(35);
    });

    test('Does not mutate original array', () => {
        const original = [{ age: 12 }, { age: 13 }];
        const start = 0;
        const result = _.reduce(original, (prev, item) => { prev = prev + item.age; return prev; }, start);

        expect(original).toEqual([{ age: 12 }, { age: 13 }]);
        expect(result).toEqual(25);
        expect(start).toEqual(0);
    });
});

describe('_.memoize', () => {
    test('Returns correct result, twice', () => {

        const testObject = {
            add: (first, second) => first + second
        };

        const spy = jest.spyOn(testObject, 'add');
        const memoizedFunction = _.memoize(spy);

        expect(memoizedFunction(2, 2)).toEqual(4);
        expect(spy).toHaveBeenCalledTimes(1);

        expect(memoizedFunction(2, 2)).toEqual(4);
        expect(spy).toHaveBeenCalledTimes(1);

        expect(spy).not.toHaveBeenCalledTimes(2);
    });

    test('Returns the correct result, twice, more parameters', () => {
        const testObject = {
            addThemAll: (first, second, third) => first + second + third
        };

        const spy = jest.spyOn(testObject, 'addThemAll');
        const memoizedFunction = _.memoize(spy);

        expect(memoizedFunction(2, 2, 2)).toEqual(6);
        expect(spy).toHaveBeenCalledTimes(1);

        expect(memoizedFunction(2, 2, 2)).toEqual(6);
        expect(spy).toHaveBeenCalledTimes(1);

        expect(memoizedFunction(2, 2, 2)).toEqual(6);
        expect(spy).toHaveBeenCalledTimes(1);

        expect(spy).not.toHaveBeenCalledTimes(3);
    })
});

describe('_.defaults', () => {
    test('Returns an object', () => {
        const result = _.defaults({}, {});
        expect(result).toEqual({});
    });
    test('Does not mutate original value', () => {
        const original = {};
        const result = _.defaults(original, {});
        expect(result).not.toBe(original);
    });
    test('Gives precedence to the original object, not default', () => {
        const result = _.defaults({ a : 1 }, { a: 2 });
        expect(result).toEqual({ a: 1 });
    });

    test('three objects testing - for Becky', () => {
        const result = _.defaults({ a: 1 }, { a: 2, b: 3}, { a: 3});
        expect(result).toEqual({ a: 1, b: 3});
    })
});

describe('_.throttle', () => {
    test('Returns correct result, twice', (done) => {
        const click = jest.fn().mockReturnValue(3);
        const throttledClick = _.throttle(click, 100);
    
        expect(throttledClick()).toBe(3);
        expect(click).toHaveBeenCalledTimes(1);

        expect(throttledClick()).toBe(undefined);
        expect(click).toHaveBeenCalledTimes(1);

        setTimeout(() => {
            expect(throttledClick()).toBe(3);
            expect(click).toHaveBeenCalledTimes(2);
            done();
        }, 500);
    });
});

fdescribe('_.curry', () => {
    test('Currys a one argument function', () => {
        
        const inner = jest.fn();
        const outer = (a) => inner(a);
        const curriedFunction = _.curry(outer);
        
        const appliedCurriedFunction = curriedFunction('first');
        
        expect(inner).toHaveBeenCalledWith('first')
        
    });
    test('Currys a two argument function', () => {

        const inner = jest.fn();
        const outer = (a, b) => inner(a, b);
        const curriedFunction = _.curry(outer);
        
        const appliedCurriedFunction = curriedFunction('first')('second');
        
        expect(inner).toHaveBeenCalledWith('first', 'second')
        
    });

    test('Takes two arguments at once', () => {
        
        const inner = jest.fn();
        const outer = (a, b, c) => inner(a, b, c);
        const curriedFunction = _.curry(outer);
        
        const appliedCurriedFunction = curriedFunction('first')('second', 'third');
        
        expect(inner).toHaveBeenCalledWith('first', 'second', 'third');
        
    });
});
