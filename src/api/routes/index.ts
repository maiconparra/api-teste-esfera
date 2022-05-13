import { Router } from 'express';
import { ContatoController } from '../controllers/contato.controller';
import { EnderecoController } from '../controllers/endereco.controller';
import { UserController } from '../controllers/user.controller';

const Routes = Router();

const userController = new UserController;
const conatotController = new ContatoController;
const enderecoController = new EnderecoController;

Routes.get('/listUsers', userController.index);
Routes.get('/byIdUser/:UserId', userController.find);
Routes.post('/createUser', userController.store);
Routes.put('/updateUser', userController.update);
Routes.delete('/deleteUser/:id', userController.delete);

Routes.get('/listContato', conatotController.index);
Routes.get('/byIdContato', conatotController.find);
Routes.get('/byUserIdContato/:UserId', conatotController.findUserId);
Routes.post('/createContato', conatotController.store);
Routes.put('/updateContato', conatotController.update);
Routes.delete('/deleteContato/:id', conatotController.delete);

Routes.get('/listEndereco', enderecoController.index);
Routes.get('/byIdEdreco', enderecoController.find);
Routes.get('/byUserIdEndereco/:UserId', enderecoController.findUserId);
Routes.post('/createEndereco', enderecoController.store);
Routes.put('/updateEndereco', enderecoController.update);
Routes.delete('/deleteEndereco/:id', enderecoController.delete);



export default Routes;