import express, { } from 'express';
import TasksController from '../controllers/TaskController';
const routerTask = express.Router();

routerTask.get('/tasks', TasksController.index);

routerTask.get('/tasks/:taskId', TasksController.show);

routerTask.post('/tasks', TasksController.create);

routerTask.put('/tasks', TasksController.update);

routerTask.delete('/tasks/:taskId', TasksController.delete);

export default routerTask;
