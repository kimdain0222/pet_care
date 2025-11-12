import { Request, Response } from 'express';
import { z } from 'zod';
import { dashboardService } from '../services/dashboard.service.js';
import { onboardingService } from '../services/onboarding.service.js';

const querySchema = z.object({
  ownerId: z.string().optional()
});

export const dashboardController = {
  getSummary(req: Request, res: Response) {
    const { ownerId } = querySchema.parse(req.query);
    const profiles = onboardingService.listProfiles();

    const profile = ownerId
      ? profiles.find((item) => item.ownerId === ownerId)
      : profiles[profiles.length - 1];

    if (!profile) {
      return res.status(404).json({ message: '등록된 반려묘 정보가 없습니다.' });
    }

    const summary = dashboardService.buildSummary(profile);
    return res.json({ data: summary });
  }
};
