import css from './RegisterForm.module.css';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(userData)).then(res => {
      // console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success(`User ${userData.name} created!`);
        form.reset();
      }
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
