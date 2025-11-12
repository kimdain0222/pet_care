import { Router } from 'express';
import { communityController } from '../controllers/community.controller.js';

const router = Router();

router.get('/', (req, res) => communityController.list(req, res));

export default router;
