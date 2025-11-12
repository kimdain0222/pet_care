import { Request, Response } from 'express';

const healthLogs = [
  {
    id: 'log-001',
    date: '2025-11-12',
    appetite: '정상',
    activity: '활발',
    bowel: '정상'
  }
];

const weightHistories = [
  { date: '2025-11-01', weight: 4.1 },
  { date: '2025-11-08', weight: 4.2 }
];

const medicalVisits = [
  { date: '2025-10-28', description: '예방접종 3차 완료' },
  { date: '2025-09-15', description: '정기 검진 & 혈액검사' }
];

export const recordsController = {
  summary(_req: Request, res: Response) {
    return res.json({
      data: {
        healthLogs,
        weightHistories,
        medicalVisits
      }
    });
  }
};
