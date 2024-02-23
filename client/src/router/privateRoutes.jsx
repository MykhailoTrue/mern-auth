import { Home, Profile } from '../pages';
import { Navigate } from 'react-router-dom';

const privateRoutes = [
  { path: '/home', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '*', element: <Navigate to="/admin" /> },
];

export default privateRoutes;
