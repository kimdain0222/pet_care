import { Router } from 'express';
import { dashboardController } from '../controllers/dashboard.controller.js';

const router = Router();

router.get('/', (req, res) => dashboardController.getSummary(req, res));

export default router;
