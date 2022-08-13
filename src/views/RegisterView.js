// import { useState } from 'react';
// import { useSignUpMutation } from 'redux/contactsApi';

// export default function RegistredView() {
//   const [params, setParams] = useState({ name: '', email: '', password: '' });
//   const [signUp, { isLoading }] = useSignUpMutation();

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;
//     setParams({ ...params, [name]: value });
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const response = await signUp(params);
//     if (response?.data?.token) {
//       console.log(response?.data?.token);
//       console.log(`Sign up success`);
//       reset();
//     } else {
//       console.log(`Check your info and try again`);
//       setParams({ ...params, password: '' });
//     }
//   }

//   const reset = () => {
//     setParams({ name: '', email: '', password: '' });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Log in your account</h2>
//       <label>
//         Name
//         <input
//           type="name"
//           name="name"
//           value={params.name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label>
//         Email
//         <input
//           type="email"
//           name="email"
//           value={params.email}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label>
//         Password
//         <input
//           type="password"
//           name="password"
//           value={params.password}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <button variant="success" type="submit">
//         register
//       </button>
//     </form>
//   );
// }
