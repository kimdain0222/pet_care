import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 로그인 API 연동
    // 임시로 온보딩 페이지로 이동
    navigate('/onboarding');
  };

  return (
    <div className="page login-page">
      <div className="login-container">
        <h1>냥냥도감</h1>
        <p className="subtitle">반려묘 품종 특화 헬스케어 플랫폼</p>

        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>로그인</legend>
            <label>
              아이디
              <input
                type="text"
                name="username"
                placeholder="아이디를 입력하세요"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </label>
            <label>
              비밀번호
              <input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </label>
          </fieldset>

          <button type="submit" className="primary">
            로그인
          </button>
        </form>

        <p className="signup-link">
          계정이 없으신가요?{' '}
          <button
            type="button"
            className="link-button"
            onClick={() => navigate('/onboarding')}
          >
            회원가입 및 반려묘 정보 입력하기
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

