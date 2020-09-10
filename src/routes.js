import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
// import DelivererController from './app/controllers/DelivererController';
import Deliveryman from './app/controllers/DeliverymanController';

import CarrierController from './app/controllers/CarrierController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// rota para autenticação
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// rotas para a Gestão de encomendas
routes.get('/deliveryman/:id/deliveries', CarrierController.index);
// routes.get('/deliveryman/:id/delivered', CarrierController.show);
// routes.put('/deliveryman/:id/catch/', CarrierController.catch);
// routes.put('/deliveryman/:id/drop/', CarrierController.drop);

// routes.post('/delivery/:id/problems', DeliveryProblemsController.store);

// middleware garante que as demais rotas a seguir estejam acessíveis
// apenas para usuários autenticados
routes.use(authMiddleware);

routes.put('/users', UserController.update);

// rotas para o upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

// rotas para os destinatários
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

// rotas para o CRUD dos entregadores (deliveryman)
routes.get('/deliveryman', Deliveryman.index);
routes.post('/deliveryman', Deliveryman.store);
routes.put('/deliveryman/:id', Deliveryman.update);
routes.delete('/deliveryman/:id', Deliveryman.delete);

// rotas para cadastro das entregas

export default routes;
