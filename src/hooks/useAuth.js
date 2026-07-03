import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout, clearError } from '../store/slices/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const login = (email, password) => {
    return dispatch(loginUser({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout: handleLogout,
    clearError: handleClearError,
  };
}
