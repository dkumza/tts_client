import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../../forms/CustomInput';
import { CustomButton } from '../../forms/CustomButton';
import { Link } from 'react-router-dom';
import { useMsgContext } from '../../contexts/msgContext';

const REG_URL = 'http://localhost:3000/api/auth/register';

export default function SignUp() {
  const { addMsg } = useMsgContext();

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
        res.status === 201 ? addMsg('bg-green-200', res.data.msg) : null;
        formik.resetForm();
      })
      .catch((error) => {
        const newErr = error.response.data;
        addMsg('bg-red-200', newErr.msg);
        const errorFromAPI = newErr.msg;
        formik.setErrors(errorFromAPI);
      });
  };

  const autoFocus = true; // for autoFocus prop

  return (
    <div className="flex md:p-20 items-center align-middle justify-center min-w-full min-h-full text-white">
      <div className="flex flex-col bg-stone-800 rounded-lg items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 shadow-sm min-h-full ">
        {' '}
        <h1 className="mb-4 text-2xl">Sign up</h1>
        <form onSubmit={formik.handleSubmit} className="w-full ">
          <CustomInput
            css={'w-full'}
            formik={formik}
            type={'text'}
            id={'username'}
            placeholder={'Username'}
          />
          <CustomInput
            css={'w-full'}
            formik={formik}
            type={'email'}
            id={'email'}
            placeholder={'Email Address'}
          />
          <CustomInput
            css={'w-full'}
            formik={formik}
            type={'password'}
            id={'password'}
            placeholder={'Password'}
          />
          <CustomInput
            css={'w-full'}
            formik={formik}
            type={'password'}
            id={'mPassword'}
            placeholder={'Repeat password'}
          />
          <CustomButton
            text={'Sign Up'}
            to={'/login'}
            css={
              'w-full text-white font-semibold bg-amber-500  hover:bg-amber-400'
            }
            type={'submit'}
          />

          <div className="flex justify-end">
            <Link
              to={'/login'}
              className="text-sm text-stone-500 hover:underline"
            >
              {'Already have an account? Login'}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
