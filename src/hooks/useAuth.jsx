import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const userName = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    userName,
    isLoggedIn,
    isRefreshing,
  };
};
