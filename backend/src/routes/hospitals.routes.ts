import { Router } from 'express';
import { hospitalsController } from '../controllers/hospitals.controller.js';

const router = Router();

router.get('/', (req, res) => hospitalsController.list(req, res));

export default router;
