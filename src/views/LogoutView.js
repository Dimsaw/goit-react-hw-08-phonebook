export default function LogoutView() {
  return (
    <form>
      <h2>Log in your account</h2>
      <label>
        Name
        <input
          type="name"
          name="name"
          //   value={params.email}
          //   onChange={handleChange}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          //   value={params.email}
          //   onChange={handleChange}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          //   value={params.email}
          //   onChange={handleChange}
          required
        />
      </label>
      <button variant="success" type="submit"></button>
    </form>
  );
}
