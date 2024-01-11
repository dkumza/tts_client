import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../../forms/CustomInput';
import { CustomButton } from '../../forms/CustomButton';

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
            .trim()
            .min(3, 'Username must be at least 3 characters long')
            .required('*Username is required'),
         email: Yup.string()
            .trim()
            .required('*Email is required')
            .email('*Email must be valid email'),
         password: Yup.string()
            .trim()
            .min(6, '*Password must be at least 6 characters long')
            .required('*Password is required'),
         mPassword: Yup.string()
            .trim()
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
            console.warn('axiosLogin:', error);
            const errorFromAPI = error.response.data;
            formik.setErrors(errorFromAPI);
         });
   };

   const autoFocus = true; // for autoFocus prop

   return (
      <div className="flex md:p-8 items-center align-middle justify-center min-w-full min-h-full">
         <div className="flex flex-col items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 bg-white shadow-sm min-h-full">
            <h1 className="mb-4 text-2xl">Sign up</h1>
            <form onSubmit={formik.handleSubmit} className="w-full ">
               <CustomInput
                  // focus={autoFocus}
                  style={'w-full'}
                  formik={formik}
                  type={'text'}
                  id={'username'}
                  placeholder={'Username'}
               />
               <CustomInput
                  style={'w-full'}
                  formik={formik}
                  type={'email'}
                  id={'email'}
                  placeholder={'Email Address'}
               />
               <CustomInput
                  style={'w-full'}
                  formik={formik}
                  type={'password'}
                  id={'password'}
                  placeholder={'Password'}
               />
               <CustomInput
                  style={'w-full'}
                  formik={formik}
                  type={'password'}
                  id={'mPassword'}
                  placeholder={'Repeat password'}
               />
               <CustomButton
                  text={'Sign Up'}
                  css={
                     'w-full text-white font-semibold bg-amber-400  hover:bg-amber-300'
                  }
                  type={'submit'}
               />

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
