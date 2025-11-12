const categories = [
  {
    title: '관절 케어',
    items: ['관절 보호 영양제', '쿠션형 매트']
  },
  {
    title: '신장 관리',
    items: ['저인산 사료', '자동 급수기']
  },
  {
    title: '털갈이 케어',
    items: ['털 뭉침 방지 빗', '헤어볼 예방 영양제', '그루밍 장갑']
  }
];

const ShopPage = () => {
  return (
    <div className="page shop-page">
      <header className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <img
            src="/ChatGPT Image 2025년 11월 12일 오후 02_05_02.png"
            alt="귀여운 고양이"
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
          <h2>헬스샵</h2>
        </div>
        <p>품종과 건강 상태를 기반으로 엄선한 상품을 만나보세요.</p>
      </header>

      <section className="category-grid">
        {categories.map((category, index) => (
          <article key={category.title} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
              position: 'absolute', 
              top: index % 2 === 0 ? '10px' : 'auto',
              bottom: index % 2 === 1 ? '10px' : 'auto',
              right: index % 2 === 0 ? '10px' : 'auto',
              left: index % 2 === 1 ? '10px' : 'auto',
              opacity: 0.25 
            }}>
              <img
                src={`/ChatGPT Image 2025년 11월 12일 오후 02_0${index === 0 ? '4_59' : index === 1 ? '5_07' : '5_10'}.png`}
                alt=""
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
            </div>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button" className="secondary">
              추천 상품 보기
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ShopPage;
