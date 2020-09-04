module.exports = {
    up: (queryInterface) => {
        return queryInterface.addConstraint('recipients', {
            fields: ['id'],
            type: 'primary key',
            name: 'recipients_pkey',
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeConstraint('recipients', 'recipients_pkey');
    },
};
