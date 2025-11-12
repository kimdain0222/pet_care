const specialtyFilters = ['안과', '심장내과', '정형외과', '종양센터', '24시 응급'];

const HospitalsPage = () => {
  return (
    <div className="page hospitals-page">
      <header className="page-header">
        <h2>병원 찾기</h2>
        <p>현재 위치 기반으로 동물병원을 탐색하고, 특수 진료과목을 필터링하세요.</p>
      </header>

      <section className="filter-section">
        <h3>특수 진료과목 필터</h3>
        <div className="chip-group">
          {specialtyFilters.map((filter) => (
            <button key={filter} type="button" className="chip">
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="hospital-list">
        <article className="card">
          <h4>행복한고양이 동물병원</h4>
          <p>서울시 마포구 · 02-1234-5678</p>
          <p className="tagline">안과 · 24시 응급</p>
          <button type="button" className="secondary">
            바로 연락하기
          </button>
        </article>
        <article className="card">
          <h4>펫케어 전문 클리닉</h4>
          <p>서울시 강남구 · 02-9876-5432</p>
          <p className="tagline">심장내과 · 종양센터</p>
          <button type="button" className="secondary">
            자세히 보기
          </button>
        </article>
      </section>
    </div>
  );
};

export default HospitalsPage;
