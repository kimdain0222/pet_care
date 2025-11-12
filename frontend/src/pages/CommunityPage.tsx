const tabs = ['전체', '병원 후기', '증상 토론', '용품 리뷰'];

const CommunityPage = () => {
  return (
    <div className="page community-page">
      <header className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <img
            src="/ChatGPT Image 2025년 11월 12일 오후 02_05_05.png"
            alt="귀여운 고양이"
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
          <h2>스코티쉬 폴드 집사들 모여라</h2>
        </div>
        <p>우리 아이와 같은 친구들의 집사들과 경험을 나누세요.</p>
      </header>

      <div className="tab-menu">
        {tabs.map((tab) => (
          <button key={tab} type="button" className="tab">
            {tab}
          </button>
        ))}
      </div>

      <section className="post-list">
        <article className="card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '15px', right: '15px', opacity: 0.2 }}>
            <img
              src="/ChatGPT Image 2025년 11월 12일 오후 02_05_02.png"
              alt=""
              style={{ width: '70px', height: '70px', objectFit: 'contain' }}
            />
          </div>
          <header>
            <h3>관절 염증 있는 아이 계신가요?</h3>
            <span className="meta">작성자 · 댓글 12 · 좋아요 24</span>
          </header>
          <p>스코티시폴드 관절 관리 팁을 공유해 주세요!</p>
        </article>

        <article className="card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: '15px', left: '15px', opacity: 0.2 }}>
            <img
              src="/ChatGPT Image 2025년 11월 12일 오후 02_04_59.png"
              alt=""
              style={{ width: '65px', height: '65px', objectFit: 'contain' }}
            />
          </div>
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
