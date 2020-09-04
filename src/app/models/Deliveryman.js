import Sequelize, { Model } from 'sequelize';

class Deliveryman extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                active: Sequelize.BOOLEAN,
            },
            { sequelize }
        );

        return this;
    }
}

export default Deliveryman;
