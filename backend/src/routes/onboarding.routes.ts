import { Router } from 'express';
import { onboardingController } from '../controllers/onboarding.controller.js';

const router = Router();

router.post('/', (req, res) => onboardingController.createProfile(req, res));
router.get('/', (req, res) => onboardingController.listProfiles(req, res));

export default router;
