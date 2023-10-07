import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserBar.module.css';

import toast from 'react-hot-toast';

export const UserBar = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  const handleLogout = () => {
    dispatch(logout()).then(res => {
      // console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success(`You loged out successfully`);
      }
    });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
