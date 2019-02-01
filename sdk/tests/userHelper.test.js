const userHelper = require('../helpers/userHelper');

describe('User Helper', () => {
    test('get user by username throws an error', () => {
        const result = userHelper.getUserByUserName()
        expect(result.message).toBe('not implemented');
    })
})