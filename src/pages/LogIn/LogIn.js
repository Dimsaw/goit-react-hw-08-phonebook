import { useState } from 'react';
import { useLogInMutation } from 'redux/services';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import s from './Login.module.css';

export default function LogIn() {
  const [params, setParams] = useState({ email: '', password: '' });

  const [logIn, { isLoading }] = useLogInMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setParams({ ...params, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await logIn(params);
    if (response?.data?.token) {
      reset();
    } else {
      Notify.warning(`Invalid email or password`);

      setParams({ ...params, password: '' });
    }
  }

  const reset = () => {
    setParams({ email: '', password: '' });
  };

  return (
    <main className={s.mainContainer}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h1 className={s.text}>Log in your account</h1>
        <label className={s.label}>
          <span className={s.text__email}>Email</span>

          <input
            className={s.input}
            type="email"
            name="email"
            value={params.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.text__password}> Password</span>

          <input
            className={s.input}
            type="password"
            name="password"
            value={params.password}
            onChange={handleChange}
            pattern=".{7,}"
            title="At least 7 characters in length. Wasn't your password \'password123\'? 🤫"
            required
          />
        </label>

        <button
          className={s.btn}
          variant="success"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Logining...' : 'Login'}
        </button>
      </form>
    </main>
  );
}
