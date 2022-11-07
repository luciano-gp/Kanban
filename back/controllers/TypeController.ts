import { Request, Response, NextFunction } from 'express';
import { Type as TypeModel } from '../models/Type';

class TypeController {

  index = async (req: Request, res: Response) => {
    const params = req.query;
    const limit: number = parseInt(params.limit as string) || 10;
    const page: number = parseInt(params.page as string) || 1;
    const offset: number = (page - 1) * limit;
    const sort: any = params.sort || 'id';
    const order: any = params.order || 'ASC';
    const where: any = {};

    const types = await TypeModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]]
    });
    res.json(types);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.validateType(req.body);
      const type = await TypeModel.create(data);
      res.json(type);
    }
    catch (error: any) {
      res.status(400).json({ error: error.message + "" });
    }
  }

  show = async (req: Request, res: Response, next: NextFunction) => {
    const task = await TypeModel.findByPk(req.params.typeId);
    res.json(task);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id;
      const data = await this.validateType(req.body);
      await TypeModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await TypeModel.findByPk(id));
    }
    catch (error: any) {
      res.status(400).json({ error: error.message + "" });
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await TypeModel.destroy({
      where: {
        id: req.params.typeId
      }
    });
    res.json({});
  }

  validateType = async (data: any) => {
    const typeDescription = data.description;
    const type = await TypeModel.count({
        where: {
            description: typeDescription
        }
    });

    if (type) {
        throw new Error(`The type "${typeDescription}" is already exists`);
    }

    return data;
  }

}

export default new TypeController();