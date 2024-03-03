import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  const login = () => {
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div className="flex justify-end">
      {isAuth ? (
        <button className="bg-red-800 rounded-md" onClick={logout}>
          Sign Out
        </button>
      ) : (
        <button className="bg-blue-600 rounded-md" onClick={login}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
