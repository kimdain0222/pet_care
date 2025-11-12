import { Request, Response } from 'express';

const hospitals = [
  {
    id: 'clinic-001',
    name: '행복한고양이 동물병원',
    location: '서울시 마포구',
    phone: '02-1234-5678',
    specialties: ['안과', '24시 응급']
  },
  {
    id: 'clinic-002',
    name: '펫케어 전문 클리닉',
    location: '서울시 강남구',
    phone: '02-9876-5432',
    specialties: ['심장내과', '종양센터']
  }
];

export const hospitalsController = {
  list(req: Request, res: Response) {
    const specialty = typeof req.query.specialty === 'string' ? req.query.specialty : undefined;

    const filtered = specialty
      ? hospitals.filter((hospital) => hospital.specialties.includes(specialty))
      : hospitals;

    return res.json({ data: filtered });
  }
};
