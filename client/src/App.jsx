import { Navbar } from './components/UI';
import { AuthContextProvider } from './context/AuthContextProvider';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar></Navbar>
        <AppRouter></AppRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
