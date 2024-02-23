import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';
import publicRoutes from './publicRoutes';
import privateRoutes from './privateRoutes';

const mapRoutes = (isAuth) => {
  let routeToMap = publicRoutes;
  if (isAuth) {
    routeToMap = privateRoutes;
  }
  return routeToMap.map((route) => {
    return <Route key={route.path} {...route}></Route>;
  });
};

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);
  console.log(isLoading);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <Routes>{mapRoutes(isAuth)}</Routes>;
};

export default AppRouter;
