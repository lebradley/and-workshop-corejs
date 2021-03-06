// Import axios
// mock axios - get, put post etc.

// import user helper
// user Helper uses the axios mock, rather than

const axios = require('axios');

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  }
];

jest.mock('axios');
const userHelper = require('../helpers/userHelper');

describe('User Helper', () => {
  test('get all users', async () => {
    axios.get.mockResolvedValue(mockUsers);
    const response = await userHelper.getAllUsers();
    expect(response).toBe(mockUsers);
    expect(response.length).toBe(mockUsers.length);
  });

  test('get a user by id', async () => {
    axios.get.mockResolvedValue([mockUsers[0]]);
    const response = await userHelper.getUserByUserId(1);
    expect(response).toBe(mockUsers[0]);
    expect(response.name).toBe('Leanne Graham');
    expect(response.email).toBe('Sincere@april.biz');
    expect(response.id).toBe(1);
  });
});
