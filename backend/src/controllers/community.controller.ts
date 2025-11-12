import { Request, Response } from 'express';

const communityPosts = [
  {
    id: 'post-001',
    title: '관절 염증 있는 아이 계신가요?',
    author: '집사A',
    category: '증상 토론',
    likes: 24,
    comments: 12
  },
  {
    id: 'post-002',
    title: '방문 인증 · 강남 케어 동물병원 후기',
    author: '집사B',
    category: '병원 후기',
    likes: 15,
    comments: 4,
    badge: '방문 인증'
  }
];

export const communityController = {
  list(req: Request, res: Response) {
    const category = typeof req.query.category === 'string' ? req.query.category : undefined;

    const filtered = category
      ? communityPosts.filter((post) => post.category === category)
      : communityPosts;

    return res.json({ data: filtered });
  }
};
