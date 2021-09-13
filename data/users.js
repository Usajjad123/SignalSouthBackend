
const users = [
    {
        id: 'u1',
        firstName: 'Ali',
        lastName: 'Bilal',
        password: '123',
        email: 'ekaterina.tankova@devias.io',
        phone: '3044283097'
    },
    {
        id: 'u2',
        firstName: 'john',
        lastName: 'doltan',
        password: '123',
        email: 'ekaterina.tankova@devias.io',
        phone: '3044283097'
    },
    {
        id: 'u3',
        firstName: 'Michel',
        lastName: 'jacksen',
        password: '123',
        email: 'ekaterina.tankova@devias.io',
        phone: '7706352682'
    },
];


module.exports.addUser = (user) => {
    console.log('user in store going to be pushed, ', user);
    users.push(user);
};

module.exports.getUsers = (start, end) => [...users.slice(start, end)];

module.exports.getUserById = (id_) => users.find(({ id }) => id === id_);

module.exports.deleteUserById = (id_) => {
    const index = users.findIndex(({ id }) => id === id_);
    const user = users[index];
    if (index !== -1) {
        users.splice(index, 1);
    }
    return user;
};

module.exports.updateUser = (id_, user) => {
    const i = users.findIndex(({ id }) => id === id_);
    if (i !== -1) {
        users[i] = user;
    }
};