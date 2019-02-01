const userHelper = require('../helpers/userHelper');

describe('User Helper', () => {
 // do some tests here
    it('test testy', () => {
        expect(userHelper.getUsers()[0]).toBe('Emmanuel');
    })

    it('test testy 2', () => {
        expect(userHelper.getAUser()).toBe('Bob');
    })
})