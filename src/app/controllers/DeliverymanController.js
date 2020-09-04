import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
// import File from '../models/File';

class DeliverymanController {
    async index(req, res) {
        const deliverymans = await Deliveryman.findAll();

        return res.json(deliverymans);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'Faltam preencher os campos.' });
        }

        const deliverymanExists = await Deliveryman.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (deliverymanExists) {
            return res.status(400).json({ error: 'Entregador já existe.' });
        }

        const { id, name, email, avatar } = await Deliveryman.create(req.body);

        return res.json({ id, name, email, avatar });
    }
}

export default new DeliverymanController();
