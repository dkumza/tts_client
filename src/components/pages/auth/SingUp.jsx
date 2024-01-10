import { useState } from 'react';
import axios from 'axios';

const REG_URL = 'http://localhost:3000/api/auth/register';

export default function SignUp() {
   const [authState, setAuthState] = useState({
      email: 'james@secure.com',
      password: '123456',
      repeatPassword: '',
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
         .post(REG_URL, authState)
         .then((res) => {
            console.log('res ===', res);
            res.status === 201 ? alert(res.data.msg) : null;
            // const { token } = res.data;
            // console.log('token ===', token);
            // // save token to lS
            // localStorage.setItem('bit_token', token);
         })
         .catch((error) => {
            console.warn('handleLogin ivyko klaida:', error);
            const errorAxios = error.response.data;
            console.log('errorAxios ===', errorAxios);
            alert(errorAxios.msg);
         });
   }

   return (
      <div className="flex md:p-8 items-center align-middle justify-center min-w-full min-h-full">
         <div className="flex flex-col items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 bg-white shadow-sm min-h-full">
            <h1 className="mb-4 text-2xl">Sign up</h1>
            <form onSubmit={handleLogin} className="w-full">
               <input
                  onChange={handleInput}
                  value={authState.email}
                  required
                  className="w-full px-3 py-2 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                  className="w-full px-3 py-2 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
               />
               <input
                  onChange={handleInput}
                  value={authState.repeatPassword}
                  required
                  className="w-full px-3 py-2 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  name="repeatPassword"
                  type="password"
                  id="repeat_password"
                  placeholder="Repeat password"
                  autoComplete="current-password"
               />
               <button
                  type="submit"
                  className="w-full py-2 mb-4 text-white font-semibold bg-amber-400  hover:bg-amber-300"
               >
                  Sign Up
               </button>
               <div className="flex justify-end">
                  <a
                     href="#"
                     className="text-sm text-stone-500 hover:underline"
                  >
                     {'Already have an account? Login'}
                  </a>
               </div>
            </form>
         </div>
      </div>
   );
}
