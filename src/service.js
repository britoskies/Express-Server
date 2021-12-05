const data = require('./users-data.json');

module.exports = {
    getUsers: () => data,
    createUser: (thisUserData) => {
        let newUser = {
            id: data.length + 1,
            ...thisUserData
        };

        data.push(newUser);
        return newUser;
    }
};