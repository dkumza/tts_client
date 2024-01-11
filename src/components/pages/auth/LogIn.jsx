import axios from 'axios';
import { useAuthContext } from '../../authContext';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthInput } from './AuthInputFormik';

const LOGIN_URL = 'http://localhost:3000/api/auth/login';

export default function LogIn() {
   const { login } = useAuthContext();

   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         email: 'james@secure.com',
         password: '123456',
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .required('*Email is required')
            .email('*Email must be valid email'),
         password: Yup.string()
            .min(6, '*Password must be at least 6 characters long')
            .required('*Password is required'),
      }),
      onSubmit: (loginInfo) => {
         console.log(loginInfo);
         axiosLogin(loginInfo);
      },
   });

   const axiosLogin = (loginInfo) => {
      axios
         .post(LOGIN_URL, loginInfo)
         .then((res) => {
            console.log(res.data);
            const { token, username } = res.data;

            if (token) {
               login(token, username);
               navigate('/');
            }
         })
         .catch((error) => {
            console.warn('handleLogin ivyko klaida:', error);
            const errorAxios = error.response.data;
            console.log('errorAxios ===', errorAxios);
         });
   };

   // const [authState, setAuthState] = useState({
   //    email: 'james@secure.com',
   //    password: '123456',
   // });

   // /**
   //  * function to enter input values to state
   //  * @param {*} event
   //  */
   // function handleInput(event) {
   //    const { name, value } = event.target;
   //    console.log('name ===', name);
   //    setAuthState({ ...authState, [name]: value });
   // }

   // /** jsdoc
   //  *
   //  * @param {SubmitEvent} event
   //  */
   // function handleLogin(event) {
   //    event.preventDefault();
   //    console.log('js in control');
   // }

   return (
      <div className="flex md:p-8 items-center align-middle justify-center min-w-full min-h-full ">
         <div className="flex flex-col items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 bg-white shadow-sm min-h-full ">
            <h1 className="mb-4 text-2xl">Login</h1>
            <form onSubmit={formik.handleSubmit} className="w-full ">
               <AuthInput
                  style={'w-full'}
                  formik={formik}
                  type={'email'}
                  id={'email'}
                  placeholder={'Email Address'}
               />

               <AuthInput
                  style={'w-full'}
                  formik={formik}
                  type={'password'}
                  id={'password'}
                  placeholder={'Password'}
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
