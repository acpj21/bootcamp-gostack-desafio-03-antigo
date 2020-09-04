module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('deliveryman', 'active', {
            type: Sequelize.BOOLEAN,
            default: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('deliveryman', 'active');
    },
};
