import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type AppLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { to: '/dashboard', label: '홈' },
  { to: '/hospitals', label: '병원 찾기' },
  { to: '/community', label: '커뮤니티' },
  { to: '/records', label: '건강 기록' },
  { to: '/shop', label: '헬스샵' }
];

const hideNavPaths = ['/login', '/', '/onboarding'];

const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  return (
    <div className="app-shell">
      {!shouldHideNav && (
        <header className="app-header">
          <h1>냥냥도감</h1>
        </header>
      )}
      <main className="app-content">{children}</main>
      {!shouldHideNav && (
        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="app-nav-item">
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default AppLayout;
