import express, { } from 'express';
import TypesController from '../controllers/TypeController';
const routerType = express.Router();

routerType.get('/types', TypesController.index);

routerType.get('/types/:typeId', TypesController.show);

routerType.post('/types', TypesController.create);

routerType.put('/types', TypesController.update);

routerType.delete('/types/:typeId', TypesController.delete);

export default routerType;
