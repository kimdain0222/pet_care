import { CareRoutineItem, HealthRisk, ProductRecommendation } from '../types/pet.js';

export const healthRiskByBreed: Record<string, HealthRisk[]> = {
  '스코티시 폴드': [
    {
      title: '관절 건강',
      riskLevel: '주의',
      suggestions: ['체중 관리', '관절 보호 영양제']
    }
  ],
  페르시안: [
    {
      title: '호흡기 질환',
      riskLevel: '보통',
      suggestions: ['주기적인 그루밍', '먼지 최소화']
    }
  ],
  메인쿤: [
    {
      title: '심장비대증',
      riskLevel: '보통',
      suggestions: ['정기 검진', '심장 보호 영양제']
    }
  ]
};

export const careRoutineTemplates: CareRoutineItem[] = [
  {
    title: '심장 사상충 예방약 복용',
    period: 'monthly',
    description: '월 1회 예방약 복용 여부를 체크하세요.'
  },
  {
    title: '빗질 주기를 3회 이상 유지',
    period: 'weekly',
    description: '털갈이 시기에는 빗질 횟수를 늘립니다.'
  }
];

export const productRecommendations: ProductRecommendation[] = [
  {
    name: '자동 급수기',
    reason: '수분 섭취를 늘려 신장 건강을 지켜줘요.'
  },
  {
    name: '헤어볼 예방 영양제',
    reason: '털갈이 시즌에 위장 부담을 줄여줘요.'
  }
];
