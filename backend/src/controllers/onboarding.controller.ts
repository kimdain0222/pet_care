import { Request, Response } from 'express';
import { z } from 'zod';
import { dashboardService } from '../services/dashboard.service.js';
import { onboardingService } from '../services/onboarding.service.js';
import { PetProfile } from '../types/pet.js';

const onboardingSchema = z.object({
  ownerId: z.string().min(1, '아이디는 필수입니다.'),
  petName: z.string().min(1, '반려묘 이름을 입력해주세요.'),
  gender: z.enum(['공주님', '왕자님']),
  age: z.coerce.number().int().nonnegative(),
  weight: z.coerce.number().nonnegative(),
  breed: z.enum(['스코티시 폴드', '페르시안', '메인쿤']),
  medicalConditions: z
    .union([
      z.string(),
      z.array(z.string())
    ])
    .optional()
    .transform((value) => {
      if (!value) return [];
      if (Array.isArray(value)) return value.filter(Boolean);
      return value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    }),
  isFirstTimeOwner: z.coerce.boolean()
});

export const onboardingController = {
  createProfile(req: Request, res: Response) {
    const parsed = onboardingSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map((issue) => issue.message);
      return res.status(400).json({ message: '입력값을 확인해주세요.', errors });
    }

    const profile: PetProfile = parsed.data;
    onboardingService.saveProfile(profile);

    const summary = dashboardService.buildSummary(profile);

    return res.status(201).json({
      message: `${profile.petName}의 건강 관리 홈이 생성되었습니다.`,
      data: summary
    });
  },

  listProfiles(_req: Request, res: Response) {
    const profiles = onboardingService.listProfiles();
    return res.json({ data: profiles });
  }
};
