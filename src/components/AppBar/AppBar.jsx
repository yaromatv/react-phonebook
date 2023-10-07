import { Navigation } from './Navigation';
import { UserBar } from './UserBar';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserBar /> : <AuthNav />}
    </header>
  );
};
