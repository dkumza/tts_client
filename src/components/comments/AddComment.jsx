import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from '../contexts/authContext';
import { CustomFormik } from '../forms/CustomFormik';
import { CustomButton } from '../forms/CustomButton';
import axios from 'axios';
import { useMsgContext } from '../contexts/msgContext';

const COMM_URL = 'http://localhost:3000/api/comments/product';

export const AddComment = ({
  setComment,
  productID,
  setDataFromAPi,
  handleComment,
}) => {
  const { username, token } = useAuthContext();
  const { addMsg } = useMsgContext();

  const formik = useFormik({
    initialValues: {
      comm_author: username,
      comm_context: '',
      comm_date: new Date().toLocaleString('lt-LT', { dateStyle: 'short' }),
    },
    validationSchema: Yup.object({
      comm_context: Yup.string()
        .trim()
        .min(6, '*Comment must be at least 6 characters long')
        .max(255)
        .required('*Comment is a required field'),
    }),
    onSubmit: (data) => {
      axiosNewComment(data);
    },
  });

  const axiosNewComment = (data) => {
    axios
      .post(`${COMM_URL}/${productID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDataFromAPi((prevState) => {
          // from res add comm_id to new object - newComm
          const newComm = { comm_id: res.data.comm_id, ...data };
          // spread prev state and add to end newComm
          const newCommState = [...prevState, newComm];
          return newCommState;
        });
        formik.resetForm();
        addMsg('bg-green-200', `${res.data.msg}`);
        handleComment();
      })
      .catch((error) => {
        console.warn('axiosLogin:', error);
        const errorFromAPI = error.response.data;
        formik.setErrors(errorFromAPI);
      });
  };

  return (
    <div className={`${''} flex flex-col pb-4`}>
      <h1>Write new comment</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="py-1 flex flex-col w-fit  justify-end items-end md:w-6/12"
      >
        <textarea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comm_context}
          className="w-full  px-3 py-2 text-black rounded border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
          name="comm_context"
          id="comm_context"
          rows="4"
        />
        <CustomFormik formik={formik} id={'comm_context'} />

        <CustomButton
          text={'Comment'}
          type={'submit'}
          css={'px-4 py-1 rounded bg-lime-300 w-fit'}
        />
      </form>
    </div>
  );
};
