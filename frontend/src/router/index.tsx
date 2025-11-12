import { useRoutes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import OnboardingPage from '../pages/OnboardingPage';
import HospitalsPage from '../pages/HospitalsPage';
import CommunityPage from '../pages/CommunityPage';
import RecordsPage from '../pages/RecordsPage';
import ShopPage from '../pages/ShopPage';

const routes = [
  { path: '/', element: <DashboardPage /> },
  { path: '/onboarding', element: <OnboardingPage /> },
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
