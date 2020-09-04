import * as Yup from 'yup';

import { Op } from 'sequelize';

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

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            avatar_id: Yup.number(),
            active: Yup.boolean(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'Faltam preencher os campos.' });
        }

        const { id } = req.params;

        const deliveryman = await Deliveryman.findByPk(id);

        if (!deliveryman) {
            return res.status(404).json({ error: 'Entregador não existe.' });
        }

        const { avatar_id, email, active } = req.body;

        const deliveremanDupEmail = await Deliveryman.findOne({
            where: {
                email,
                id: {
                    [Op.ne]: id,
                },
            },
        });

        if (deliveremanDupEmail) {
            return res.status(404).json({ error: 'Email existente.' });
        }

        if (req.body.avatar_id === 0) {
            req.body.avatar_id = null;
        }

        const { name } = await deliveryman.update(req.body);

        return res.json({ name, email, avatar_id, active });
    }
}

export default new DeliverymanController();
