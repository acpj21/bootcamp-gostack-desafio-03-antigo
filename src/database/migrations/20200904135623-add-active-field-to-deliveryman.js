module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('deliverymans', 'active', {
            type: Sequelize.BOOLEAN,
            default: true,
        });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('deliverymans', 'active');
    },
};
