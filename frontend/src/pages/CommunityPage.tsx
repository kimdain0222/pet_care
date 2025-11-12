const tabs = ['전체', '병원 후기', '증상 토론', '용품 리뷰'];

const CommunityPage = () => {
  return (
    <div className="page community-page">
      <header className="page-header">
        <h2>스코티시폴드 클럽</h2>
        <p>내 품종 클럽에서 다른 집사들과 경험을 나누세요.</p>
      </header>

      <div className="tab-menu">
        {tabs.map((tab) => (
          <button key={tab} type="button" className="tab">
            {tab}
          </button>
        ))}
      </div>

      <section className="post-list">
        <article className="card">
          <header>
            <h3>관절 염증 있는 아이 계신가요?</h3>
            <span className="meta">작성자 · 댓글 12 · 좋아요 24</span>
          </header>
          <p>스코티시폴드 관절 관리 팁을 공유해 주세요!</p>
        </article>

        <article className="card">
          <header>
            <h3>방문 인증 · 강남 케어 동물병원 후기</h3>
            <span className="meta">작성자 · 댓글 4 · 좋아요 15</span>
          </header>
          <p>심장내과 진료 후기를 공유합니다.</p>
          <span className="badge">방문 인증</span>
        </article>
      </section>

      <button type="button" className="primary floating">
        + 글쓰기
      </button>
    </div>
  );
};

export default CommunityPage;
