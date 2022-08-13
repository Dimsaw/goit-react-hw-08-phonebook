import { useState } from 'react';
import { useLogInMutation } from '../redux/contactsApi';

export default function LoginView() {
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
      console.log(`Invalid email or password`);

      setParams({ ...params, password: '' });
    }
  }

  const reset = () => {
    setParams({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log in your account</h2>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={params.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={params.password}
          onChange={handleChange}
          required
        />
      </label>
      <button variant="success" type="submit" disabled={isLoading}>
        {isLoading ? 'Log ining...' : 'Log In'}
      </button>
    </form>
  );
}
