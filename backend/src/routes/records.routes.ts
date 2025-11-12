import { Router } from 'express';
import { recordsController } from '../controllers/records.controller.js';

const router = Router();

router.get('/', (req, res) => recordsController.summary(req, res));

export default router;
