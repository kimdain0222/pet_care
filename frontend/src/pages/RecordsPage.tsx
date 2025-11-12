const RecordsPage = () => {
  return (
    <div className="page records-page">
      <header className="page-header">
        <h2>건강 기록</h2>
        <p>오늘의 건강체크 기록과 체중 변화, 진료 이력을 모아볼 수 있어요.</p>
      </header>

      <section className="card">
        <h3>오늘의 건강체크 이력</h3>
        <ul>
          <li>2025-11-12 · 식욕 정상 · 활동량 활발 · 배변 정상</li>
          <li>2025-11-11 · 식욕 보통 · 활동량 보통 · 배변 정상</li>
        </ul>
      </section>

      <section className="card">
        <h3>체중 변화 그래프</h3>
        <p>그래프 컴포넌트 자리 (추후 차트 라이브러리 연동)</p>
      </section>

      <section className="card">
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
