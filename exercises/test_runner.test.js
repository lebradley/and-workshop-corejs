// ## Implement .toBeTruthy
// https://jestjs.io/docs/en/expect#tobetruthy

// ## Implement .toBe
// https://jestjs.io/docs/en/expect#tobevalue

// ## Implement .toEqual
// https://jestjs.io/docs/en/expect#toequalvalue

// ## Implement .toThrow
// https://jestjs.io/docs/en/expect#tothrowerror


function assert(input) {
  return {
    toBeTruthy: () => !!input,
    toBe: (toBeValue) => input === toBeValue,
    toEqual: (toEqualValue) => {
      const receivedKeys = Object.keys(toEqualValue);
      const expectedKeys = Object.keys(input);

      // different number of keys
      if (expectedKeys.length !== receivedKeys.length){
        return false; 
      }
      else {
          const expected = Object.keys(input);
          expected.forEach((k) => {
            if(receivedKeys.includes(k)) { // Check each key exists in other obj
              const isSame = toEqualValue[k] === input[k]; // Check key value is same
              console.log(isSame);
              if (!isSame) {
                console.log('got here');
                return false;
              }
            }
            else { 
              return false;
            }
          })
          return true;
        }
      },
    toThrow: () => {},
  }
};

xdescribe('.toBeTruthy - will show true as equal to true', () => {
  test('true is true', () => {
    console.log(assert(true).toBeTruthy());
    expect(assert(true).toBeTruthy()).toEqual(true);
  });

  test('An empty string is false', () => {
    expect(assert('').toBeTruthy()).not.toEqual(true);
  })

  test('An string is true', () => {
    expect(assert('populated').toBeTruthy()).toEqual(true);
  });

  test('An empty object is truthy', () => {
    expect(assert({}).toBeTruthy()).toEqual(true);
  })

  test('An empty array is truthy', () => {
    expect(assert([]).toBeTruthy()).toEqual(true);
  })
});

xdescribe('.toBe', () => {
  test('Works for boolean', () => {
    expect(assert(true).toBe(true)).toEqual(true);
    expect(assert(false).toBe(false)).toEqual(true);
  });
  test('Works for strings', () => {
    const stringReference = 'testing';
    expect(assert(stringReference).toBe(stringReference)).toBe(true);
  });
  test('Ensures that two references in memory are not the same', () => {
    const oneObject = {};
    const twoObject = {};
    expect(assert(oneObject).toBe(twoObject)).toBe(false);
  });
  test('Ensures the same reference in memory is true', () => {
    const oneObject = {};
    expect(assert(oneObject).toBe(oneObject)).toBe(true);
  });
});

describe('.toEqual', () => {
  xtest('Different objects with the same contents are equal', () => {
    const objectOne = { adam: 'Hello' };
    const objectTwo = { adam: 'Hello' };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(true);
  });
  xtest('Different objects with different keys are not equal', () => {
    const objectOne = { adam: 'Hello' };
    const objectTwo = { adam: 'Hello', age: 21 };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(false);
  });
  test('Different objects with same keys but different values are not equal', () => {
    const objectOne = { adam: 'Hello' };
    const objectTwo = { adam: 'Hi' };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(false);
  });
});

xdescribe('.toThrow', () => {
  test('Will not show true as equal to true', () => {
    expect(
      assert(() => {
        throw new Error();
      }).toThrow()
    ).toEqual(true);
    expect(assert(() => {}).toThrow()).toEqual(false);
  });
});

