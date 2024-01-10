import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../store/authContext';
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = 'http://localhost:3000/api/auth/login';

export default function LogIn() {
   const [authState, setAuthState] = useState({
      email: 'james@secure.com',
      password: '123456',
   });

   const { login } = useAuthContext();

   const navigate = useNavigate();

   /**
    * function to enter input values to state
    * @param {*} event
    */
   function handleInput(event) {
      const { name, value } = event.target;
      console.log('name ===', name);
      setAuthState({ ...authState, [name]: value });
   }

   /** jsdoc
    *
    * @param {SubmitEvent} event
    */
   function handleLogin(event) {
      event.preventDefault();
      console.log('js in control');

      // validation

      axios
         .post(LOGIN_URL, authState)
         .then((res) => {
            const { token } = res.data;
            if (token) {
               login(token, authState.email);
               navigate('/');
            }
         })
         .catch((error) => {
            console.warn('handleLogin ivyko klaida:', error);
            const errorAxios = error.response.data;
            console.log('errorAxios ===', errorAxios);
         });
   }

   return (
      <div className="flex md:p-36 items-center align-middle justify-center min-w-full min-h-full ">
         <div className="flex flex-col items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-20 bg-white shadow min-h-full ">
            <h1 className="mb-4 text-2xl">Login</h1>
            <form onSubmit={handleLogin} className="w-full ">
               <input
                  onChange={handleInput}
                  value={authState.email}
                  required
                  className="w-full px-3 py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
               />
               <input
                  onChange={handleInput}
                  value={authState.password}
                  required
                  className="w-full px-3 py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
               />
               <button
                  type="submit"
                  className="w-full py-2 mb-4 text-white font-semibold bg-amber-400  hover:bg-amber-300"
               >
                  Login
               </button>
               <div className="flex justify-end">
                  <a
                     href="#"
                     className="text-sm text-stone-500 hover:underline"
                  >
                     {"Don't have an account? Sign Up"}
                  </a>
               </div>
            </form>
         </div>
      </div>
   );
}
