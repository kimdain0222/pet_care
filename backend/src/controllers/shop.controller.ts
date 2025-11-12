import { Request, Response } from 'express';

const shopCatalog = [
  {
    category: '관절 케어',
    items: [
      {
        name: '관절 보호 영양제',
        description: '관절에 무리가 가지 않도록 도와줘요.',
        link: '#'
      }
    ]
  },
  {
    category: '신장 관리',
    items: [
      {
        name: '자동 급수기',
        description: '충분한 수분 섭취를 유도해요.',
        link: '#'
      }
    ]
  }
];

export const shopController = {
  list(_req: Request, res: Response) {
    return res.json({ data: shopCatalog });
  }
};
