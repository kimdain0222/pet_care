import { useState } from 'react';

const breeds = ['스코티시 폴드', '페르시안', '메인쿤'];

const OnboardingPage = () => {
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);

  return (
    <div className="page onboarding-page">
      <h2>집사님의 정보를 입력해주세요</h2>
      <form className="form">
        <fieldset>
          <legend>계정 정보</legend>
          <label>
            아이디
            <input type="text" name="username" placeholder="아이디" required />
          </label>
          <label>
            비밀번호
            <input type="password" name="password" placeholder="비밀번호" required />
          </label>
        </fieldset>

        <fieldset>
          <legend>반려묘 정보</legend>
          <label>
            성별
            <select name="gender" defaultValue="">
              <option value="" disabled>
                선택하세요
              </option>
              <option value="공주님">공주님</option>
              <option value="왕자님">왕자님</option>
            </select>
          </label>
          <label>
            나이(세)
            <input type="number" name="age" min="0" placeholder="예: 3" />
          </label>
          <label>
            몸무게(kg)
            <input type="number" name="weight" min="0" step="0.1" placeholder="예: 4.2" />
          </label>
          <label>
            품종
            <select name="breed" defaultValue="">
              <option value="" disabled>
                선택하세요
              </option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <label>
            현재 앓고 있는 질병
            <textarea name="medicalHistory" placeholder="질병 정보가 있다면 작성해주세요" rows={3} />
          </label>
        </fieldset>

        <fieldset>
          <legend>초보 집사 여부</legend>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="isFirstTime"
                value="yes"
                onChange={() => setIsFirstTime(true)}
              />
              처음 키우시나요? 예
            </label>
            <label>
              <input
                type="radio"
                name="isFirstTime"
                value="no"
                onChange={() => setIsFirstTime(false)}
              />
              아니요
            </label>
          </div>
        </fieldset>

        {isFirstTime && (
          <section className="guide-section">
            <h3>[초보 집사 전용] 반려동물 입양/분양 설문</h3>
            <article className="guide-card">
              <h4>필수 준비물 가이드</h4>
              <p>고양이를 키우기 위해 필요한 필수 준비물을 안내해요.</p>
              <ul>
                <li>식기</li>
                <li>화장실 & 모래</li>
                <li>캣타워 및 스크래처</li>
                <li>기본 구급 키트</li>
              </ul>
            </article>

            <article className="guide-card">
              <h4>모래 선택 가이드</h4>
              <p>가루형(점착력) vs. 두부형(결집력)의 장단점을 비교해 드려요.</p>
              <ul>
                <li>집사들의 평점이 높은 BEST 3 제품 추천</li>
                <li>구매 링크 연동 예정</li>
              </ul>
            </article>

            <article className="guide-card">
              <h4>첫 번째 건강 수칙</h4>
              <p>예방접종과 식이 요법 등 기본 상식을 확인하세요.</p>
              <ul>
                <li>기본 예방접종 일정 예시 제공</li>
                <li>필수 영양소 및 식단 가이드</li>
              </ul>
            </article>
          </section>
        )}

        <button type="submit" className="primary">
          온보딩 완료하기
        </button>
      </form>
    </div>
  );
};

export default OnboardingPage;
