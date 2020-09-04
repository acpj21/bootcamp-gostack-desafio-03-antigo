import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
    async index(req, res) {
        const deliverymans = await Deliveryman.findAll();

        return res.json(deliverymans);
    }
}

export default new DeliverymanController();
