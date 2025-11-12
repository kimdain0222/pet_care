export type PetGender = '공주님' | '왕자님';

export interface PetProfile {
  ownerId: string;
  petName: string;
  gender: PetGender;
  age: number;
  weight: number;
  breed: '스코티시 폴드' | '페르시안' | '메인쿤';
  medicalConditions: string[];
  isFirstTimeOwner: boolean;
}

export interface HealthRisk {
  title: string;
  riskLevel: '낮음' | '보통' | '주의' | '위험';
  suggestions: string[];
}

export interface CareRoutineItem {
  title: string;
  period: 'daily' | 'weekly' | 'monthly';
  description: string;
}

export interface ProductRecommendation {
  name: string;
  reason: string;
  link?: string;
}
