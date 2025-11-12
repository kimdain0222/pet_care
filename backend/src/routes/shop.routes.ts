import { Router } from 'express';
import { shopController } from '../controllers/shop.controller.js';

const router = Router();

router.get('/', (req, res) => shopController.list(req, res));

export default router;
