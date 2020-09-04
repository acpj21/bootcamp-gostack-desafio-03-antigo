module.exports = {
    up: (queryInterface) => {
        return queryInterface.addConstraint('deliverymans', {
            fields: ['id'],
            type: 'primary key',
            name: 'couriers_pkey',
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeConstraint(
            'deliveryman',
            'deliveryman_pkey'
        );
    },
};
