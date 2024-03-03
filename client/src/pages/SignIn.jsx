import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

const SignIn = () => {
  const { setIsAuth } = useContext(AuthContext);
  const signIn = () => {
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  };
  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
