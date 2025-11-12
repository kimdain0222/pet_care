import { Link } from 'react-router-dom';
import WidgetCard from '../components/WidgetCard';

const DashboardPage = () => {
  // TODO: 전역 상태 혹은 API 응답으로 대체 예정
  const petName = '꼬미';
  const genderLabel = '공주님';

  const healthRisks = [
    {
      title: '관절 건강',
      risk: '보통',
      tips: ['정기적인 체중 관리', '관절 보호 영양제']
    },
    {
      title: '심장 질환',
      risk: '주의',
      tips: ['월 1회 건강 체크', '스트레스 환경 줄이기']
    }
  ];

  const dailyCheckItems = ['식욕', '활동량', '대소변 상태'];

  const careRoutine = [
    '이번 주는 심장 사상충 예방약 체크!',
    '빗질 주기를 3회 이상 유지해 주세요.',
    '정기검진 예약 알림 확인하기'
  ];

  const recommendedProducts = [
    {
      name: '자동 급수기',
      reason: '신장 건강 관리에 도움을 줍니다.'
    },
    {
      name: '관절 케어 영양제',
      reason: '관절 부담을 줄여줘요.'
    }
  ];

  const sheddingChecklist = [
    { label: '빗질하기', done: true },
    { label: '영양제 챙기기', done: false },
    { label: '모래 그릇 더 자주 치우기', done: false },
    { label: '하루에 2번 이상 빗질하기', done: false }
  ];

  const celebrationMessages = [
    '꼬미가 집에 온 지 600일이에요! 축하해 주세요 🎉',
    '3개월마다 정기검진 알림이 설정되어 있어요.'
  ];

  return (
    <div className="page dashboard-page">
      <section className="page-header">
        <h2>{`${petName}의 건강 관리 홈`}</h2>
        <p>온보딩에서 입력한 정보를 기반으로 맞춤 케어를 준비했어요.</p>
        <Link className="link" to="/onboarding">
          반려묘 정보 수정하기
        </Link>
      </section>

      <div className="dashboard-grid">
        <WidgetCard
          title={`${petName} ${genderLabel}의 건강 위험 지도`}
          description="품종과 나이를 기반으로 주요 관리 포인트를 안내해요."
          action={<button type="button">건강 기록 시작하기</button>}
        >
          <ul className="list">
            {healthRisks.map((risk) => (
              <li key={risk.title} className="list-item">
                <strong>{risk.title}</strong>
                <span>위험도: {risk.risk}</span>
                <div className="inline-tags">
                  {risk.tips.map((tip) => (
                    <span key={tip} className="tag">
                      {tip}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </WidgetCard>

        <WidgetCard
          title="오늘의 건강체크"
          description="버튼만 눌러도 오늘의 컨디션을 빠르게 기록할 수 있어요."
        >
          <div className="button-group">
            {dailyCheckItems.map((item) => (
              <button key={item} type="button" className="secondary">
                {item} 체크
              </button>
            ))}
          </div>
        </WidgetCard>

        <WidgetCard
          title="맞춤 헬스케어 루틴"
          description="AI가 추천한 주간/월간 케어 루틴입니다."
        >
          <ul className="list">
            {careRoutine.map((item) => (
              <li key={item} className="list-item">
                {item}
              </li>
            ))}
          </ul>
        </WidgetCard>

        <WidgetCard
          title={`${petName}를 위한 추천 상품`}
          description="건강 위험 지도와 연동된 큐레이션이에요."
          action={<button type="button">헬스샵으로 이동</button>}
        >
          <ul className="list">
            {recommendedProducts.map((product) => (
              <li key={product.name} className="list-item">
                <strong>{product.name}</strong>
                <p>{product.reason}</p>
              </li>
            ))}
          </ul>
        </WidgetCard>

        <WidgetCard
          title={`${petName}의 털갈이 케어`}
          description="현재 털갈이 진행 상황과 체크리스트를 확인하세요."
          action={<button type="button">털갈이 케어 가이드 보기</button>}
        >
          <p className="progress-label">털갈이 진행률 60%</p>
          <div className="progress-bar">
            <span className="progress" style={{ width: '60%' }} />
          </div>
          <ul className="list">
            {sheddingChecklist.map((item) => (
              <li key={item.label} className="list-item">
                <label>
                  <input type="checkbox" checked={item.done} readOnly /> {item.label}
                </label>
              </li>
            ))}
          </ul>
        </WidgetCard>

        <WidgetCard title="맞춤 알림">
          <ul className="list">
            {celebrationMessages.map((message) => (
              <li key={message} className="list-item">
                {message}
              </li>
            ))}
          </ul>
        </WidgetCard>
      </div>
    </div>
  );
};

export default DashboardPage;
