import { useRoutes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import OnboardingPage from '../pages/OnboardingPage';
import HospitalsPage from '../pages/HospitalsPage';
import CommunityPage from '../pages/CommunityPage';
import RecordsPage from '../pages/RecordsPage';
import ShopPage from '../pages/ShopPage';

const routes = [
  { path: '/', element: <LoginPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/onboarding', element: <OnboardingPage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/hospitals', element: <HospitalsPage /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/records', element: <RecordsPage /> },
  { path: '/shop', element: <ShopPage /> }
];

const AppRouter = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRouter;
