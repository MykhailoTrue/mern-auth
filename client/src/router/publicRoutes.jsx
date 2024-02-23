import { SignIn, SignUp, About } from '../pages';
import { Navigate } from 'react-router-dom';

const publicRoutes = [
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <Navigate to="/sign-in" /> },
];

export default publicRoutes;
