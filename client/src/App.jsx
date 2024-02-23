import { AuthContextProvider } from './context/AuthContextProvider';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="">
      <AuthContextProvider>
        <AppRouter></AppRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
