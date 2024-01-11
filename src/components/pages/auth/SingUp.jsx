import axios from 'axios';
import { AuthInput } from './AuthInputFormik';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const REG_URL = 'http://localhost:3000/api/auth/register';

export default function SignUp() {
   const formik = useFormik({
      initialValues: {
         username: '',
         email: '',
         password: '',
         mPassword: '',
      },
      validationSchema: Yup.object({
         username: Yup.string()
            .min(3, 'Username must be at least 3 characters long')
            .required('*Username is required'),
         email: Yup.string()
            .required('*Email is required')
            .email('*Email must be valid email'),
         password: Yup.string()
            .min(6, '*Password must be at least 6 characters long')
            .required('*Password is required'),
         mPassword: Yup.string()
            .min(6, '*Password must be at least 6 characters long')
            .test('passwords-match', 'Passwords must match', function (value) {
               return this.parent.password === value;
            })
            .required('*Password is required'),
      }),
      onSubmit: (signUpInfo) => {
         // destruct mPassword from signUpInfo
         const { mPassword, ...infoWithoutMPassword } = signUpInfo;
         axiosSignUp(infoWithoutMPassword);
      },
   });

   const axiosSignUp = (signUpInfo) => {
      axios
         .post(REG_URL, signUpInfo)
         .then((res) => {
            console.log('res ===', res);
            res.status === 201 ? alert(res.data.msg) : null;
         })
         .catch((error) => {
            console.warn('handleLogin ivyko klaida:', error);
            const errorAxios = error.response.data;
            console.log('errorAxios ===', errorAxios);
            alert(errorAxios.msg);
         });
   };

   const autoFocus = true; // for autoFocus prop

   return (
      <div className="flex md:p-8 items-center align-middle justify-center min-w-full min-h-full">
         <div className="flex flex-col items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 bg-white shadow-sm min-h-full">
            <h1 className="mb-4 text-2xl">Sign up</h1>
            <form onSubmit={formik.handleSubmit} className="w-full ">
               <AuthInput
                  // focus={autoFocus}
                  style={'w-full'}
                  formik={formik}
                  type={'text'}
                  id={'username'}
                  placeholder={'Username'}
               />
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
               <AuthInput
                  style={'w-full'}
                  formik={formik}
                  type={'password'}
                  id={'mPassword'}
                  placeholder={'Repeat password'}
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
