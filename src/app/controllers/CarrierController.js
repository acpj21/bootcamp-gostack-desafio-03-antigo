import Delivery from '../models/Delivery';
// import File from '../models/File';

class CarrierController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const deliveries = await Delivery.findAll({
            where: {
                deliverymans_id: req.params.id,
                end_date: null,
                canceled_at: null,
            },
            limit: 2,
            offset: (page - 1) * 2,
        });

        return res.status(200).json(deliveries);
    }
}

export default new CarrierController();
