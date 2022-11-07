import cors from 'cors';
import express, { } from 'express';
import routerTask from './tasks';
import routerType from './types';
const router = express.Router();

router.use(cors());

router.use(routerTask);
router.use(routerType);

export default router;
