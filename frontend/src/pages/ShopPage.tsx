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
        <h2>헬스샵</h2>
        <p>품종과 건강 상태를 기반으로 엄선한 상품을 만나보세요.</p>
      </header>

      <section className="category-grid">
        {categories.map((category) => (
          <article key={category.title} className="card">
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
