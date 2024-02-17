import axios from 'axios';
import { useAuthContext } from '../../contexts/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../../forms/CustomInput';
import { CustomButton } from '../../forms/CustomButton';
import { useMsgContext } from '../../contexts/msgContext';

const LOGIN_URL = 'http://localhost:3000/api/auth/login';

export default function LogIn() {
  const { login } = useAuthContext();
  const { addMsg } = useMsgContext();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'james@secure.com',
      password: '123456',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required('*Email is required')
        .email('*Email must be valid email'),
      password: Yup.string()
        .trim()
        .min(6, '*Password must be at least 6 characters long')
        .required('*Password is required'),
    }),
    onSubmit: (loginInfo) => {
      axiosLogin(loginInfo);
    },
  });

  const axiosLogin = (loginInfo) => {
    axios
      .post(LOGIN_URL, loginInfo)
      .then((res) => {
        const { token, username } = res.data;

        if (token) {
          login(token, username);
          formik.resetForm();
          navigate(-1);
        }
      })
      .catch((error) => {
        addMsg('bg-red-200', `${error.response.data.error}`);
        const errorFromAPI = error.response.data;
        formik.setErrors(errorFromAPI);
      });
  };

  return (
    <div className="flex md:p-20 items-center align-middle justify-center min-w-full min-h-full text-white">
      <div className="flex flex-col bg-stone-800 rounded-lg items-center justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 shadow-sm min-h-full ">
        <h1 className="mb-4 text-2xl">Sign In</h1>
        <form onSubmit={formik.handleSubmit} className="w-full ">
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
          <CustomButton
            text={'Sign In'}
            css={'w-full text-white font-semibold bg-amber-500  hover:bg-amber-400'}
            type={'submit'}
          />
          <div className="flex justify-center mb-3">OR</div>

          <Link
            className="w-full rounded flex justify-center text-white font-semibold bg-amber-500  hover:bg-amber-400 py-2 mb-4"
            to={'/signup'}
          >
            Sing Up
          </Link>
        </form>
      </div>
    </div>
  );
}
