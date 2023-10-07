import css from './LoginForm.module.css';
import { login } from 'redux/auth/operations';
// import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
// import { useSelector } from 'react-redux/es/hooks/useSelector';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(userData)).then(res => {
      //   console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success(`User ${userData.email} successfully loged in!`);
        form.reset();
      }
    });
  };

  // const showState = useSelector(state => state);

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>

      {/* <button
        type="button"
        onClick={() => {
          console.log(showState);
        }}
      >
        STATE
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(refreshUser());
        }}
      >
        refreshUser
      </button> */}
    </form>
  );
};
