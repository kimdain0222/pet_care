# 냥냥 헬스케어 MVP

반려묘 품종 특화 헬스케어 플랫폼의 초기 MVP 틀입니다. 웹을 기반으로 구축했으며, `npm install` 과 `npm start` 두 가지 명령만으로 실행할 수 있도록 구성했습니다.

## 폴더 구조

- `frontend/` – React + Vite 기반 웹 클라이언트
- `backend/` – Express 기반 API 서버 (TypeScript)

## 빠른 실행 방법

```bash
npm install
npm start
```

- 설치 시 루트 스크립트가 `frontend` 와 `backend` 의 의존성을 함께 설치합니다.
- `npm start` 실행 시 두 서비스가 동시에 실행됩니다.
  - 프론트엔드: http://localhost:5173
  - 백엔드: http://localhost:4000

## 다음 단계 제안

- 실제 DB 연결(MySQL 또는 PostgreSQL) 및 Prisma/TypeORM 등 ORM 선택
- 온보딩 폼과 API 연동, 상태관리 스토어 설계
- 위젯 데이터 매핑을 위한 도메인 모델 정교화
- 털갈이/알림 로직에 필요한 스케줄러 및 푸시 전략 설계
- 테스트 코드(Jest 등) 및 CI 파이프라인 도입
