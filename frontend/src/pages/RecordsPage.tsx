const RecordsPage = () => {
  return (
    <div className="page records-page">
      <header className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <img
            src="/ChatGPT Image 2025년 11월 12일 오후 02_05_10.png"
            alt="귀여운 고양이"
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
          <h2>건강 기록</h2>
        </div>
        <p>오늘의 건강체크 기록과 체중 변화, 진료 이력을 모아볼 수 있어요.</p>
      </header>

      <section className="card" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.25 }}>
          <img
            src="/ChatGPT Image 2025년 11월 12일 오후 02_05_07.png"
            alt=""
            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
          />
        </div>
        <h3>오늘의 건강체크 이력</h3>
        <ul>
          <li>2025-11-12 · 식욕 정상 · 활동량 활발 · 배변 정상</li>
          <li>2025-11-11 · 식욕 보통 · 활동량 보통 · 배변 정상</li>
        </ul>
      </section>

      <section className="card" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', opacity: 0.25 }}>
          <img
            src="/ChatGPT Image 2025년 11월 12일 오후 02_05_05.png"
            alt=""
            style={{ width: '75px', height: '75px', objectFit: 'contain' }}
          />
        </div>
        <h3>체중 변화 그래프</h3>
        <p>그래프 컴포넌트 자리 (추후 차트 라이브러리 연동)</p>
      </section>

      <section className="card" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '15px', right: '15px', opacity: 0.25 }}>
          <img
            src="/ChatGPT Image 2025년 11월 12일 오후 02_05_02.png"
            alt=""
            style={{ width: '70px', height: '70px', objectFit: 'contain' }}
          />
        </div>
        <h3>진료 기록 보관함</h3>
        <ul>
          <li>2025-10-28 · 예방접종 3차 완료</li>
          <li>2025-09-15 · 정기 검진 & 혈액검사</li>
        </ul>
      </section>
    </div>
  );
};

export default RecordsPage;
