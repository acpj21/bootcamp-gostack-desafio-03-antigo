import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import Deliveryman from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// rota para autenticação
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// middleware garante que as demais rotas a seguir estejam acessíveis
// apenas para usuários autenticados
routes.use(authMiddleware);

routes.put('/users', UserController.update);

// rotas para o upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

// rotas para os destinatários
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

// rotas para os entregadores (deliveryman)
routes.get('/deliveryman', Deliveryman.index);
routes.post('/deliveryman', Deliveryman.store);
routes.put('/deliveryman/:id', Deliveryman.update);
routes.delete('/deliveryman/:id', Deliveryman.delete);

export default routes;
