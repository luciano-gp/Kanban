import { Request, Response, NextFunction } from 'express';
import { Task as TaskModel } from '../models/Task';

class TaskController {

  index = async (req: Request, res: Response) => {
    const params = req.query;
    const limit: number = parseInt(params.limit as string) || 100;
    const page: number = parseInt(params.page as string) || 1;
    const offset: number = (page - 1) * limit;
    const sort: any = params.sort || 'id';
    const order: any = params.order || 'ASC';
    const where: any = {};

    const tasks = await TaskModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]]
    });
    res.json(tasks);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const task = await TaskModel.create(data);
      res.json(task);
    }
    catch (error: any) {
      res.status(400).json({ error: error.message + "" });
    }
  }

  show = async (req: Request, res: Response, next: NextFunction) => {
    const task = await TaskModel.findByPk(req.params.taskId);
    res.json(task);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id;
      const data = req.body;
      await TaskModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await TaskModel.findByPk(id));
    }
    catch (error: any) {
      res.status(400).json({ error: error.message + "" });
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await TaskModel.destroy({
      where: {
        id: req.params.taskId
      }
    });
    res.json({});
  }

}

export default new TaskController();