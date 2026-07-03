import { Provider } from 'react-redux';
import { store } from './store';
import LoginPage from './pages/auth/LoginPage';

function App() {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
}

export default App;
