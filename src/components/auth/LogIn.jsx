import { useState } from 'react';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:3000/api/auth/login';

export default function LogIn() {
   const [authState, setAuthState] = useState({
      email: 'james@secure.com',
      password: '123456',
   });

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
            console.log('res ===', res);
            const { token } = res.data;
            console.log('token ===', token);
            // save token to lS
            localStorage.setItem('bit_token', token);
         })
         .catch((error) => {
            console.warn('handleLogin ivyko klaida:', error);
            const errorAxios = error.response.data;
            console.log('errorAxios ===', errorAxios);
         });
   }

   return (
      <div className="flex md:p-36 items-center align-middle justify-center min-w-full min-h-full">
         <div className="flex flex-col items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-20 bg-white shadow min-h-full">
            <h1 className="mb-4 text-2xl">Log in</h1>
            <form onSubmit={handleLogin} className="w-full">
               <input
                  onChange={handleInput}
                  value={authState.email}
                  required
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
               />
               <button
                  type="submit"
                  className="w-full py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
               >
                  Sign In
               </button>
               <div className="flex justify-end">
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                     {"Don't have an account? Sign Up"}
                  </a>
               </div>
            </form>
         </div>
      </div>
   );
}
