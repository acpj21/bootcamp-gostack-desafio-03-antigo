module.exports = {
    up: (queryInterface) => {
        return queryInterface.addConstraint('users', {
            fields: ['id'],
            type: 'primary key',
            name: 'users_pkey',
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeConstraint('users', 'users_pkey');
    },
};
