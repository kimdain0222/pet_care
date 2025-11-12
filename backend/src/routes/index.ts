import { Router } from 'express';
import onboardingRouter from './onboarding.routes.js';
import dashboardRouter from './dashboard.routes.js';
import hospitalsRouter from './hospitals.routes.js';
import communityRouter from './community.routes.js';
import recordsRouter from './records.routes.js';
import shopRouter from './shop.routes.js';

const router = Router();

router.use('/onboarding', onboardingRouter);
router.use('/dashboard', dashboardRouter);
router.use('/hospitals', hospitalsRouter);
router.use('/community', communityRouter);
router.use('/records', recordsRouter);
router.use('/shop', shopRouter);

export default router;
