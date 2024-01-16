import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from '../../contexts/authContext';
import { CustomInput } from '../../forms/CustomInput';
import { CustomButton } from '../../forms/CustomButton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CustomRadio } from '../../forms/CustomRadio';
import { CustomFormik } from '../../forms/CustomFormik';

const PRODUCTS_URL = 'http://localhost:3000/api/ads';
const CATs_URL = 'http://localhost:3000/api/categories';

export const Sell = () => {
   const { username } = useAuthContext();
   const [cats, setCats] = useState(null);

   // fetch categories from API
   useEffect(() => {
      axios
         .get(CATs_URL)
         .then((res) => {
            setCats(res.data);
            // console.log(res.data);
         })
         .catch((err) => {
            console.warn('ERROR: ', err);
         });
   }, []);

   const formik = useFormik({
      initialValues: {
         title: '',
         cat_id: 0,
         content: '',
         price: '',
         username,
         date: new Date().toLocaleString('lt-LT', { dateStyle: 'short' }),
         p_condition: '',
      },
      validationSchema: Yup.object({
         cat_id: Yup.number().min(1, '*Select category is required'),
         title: Yup.string()
            .trim()
            .min(3, '*Title must be at least 3 characters long')
            .required('*Title is required'),
         username: Yup.string()
            .trim()
            .min(3, '*Username name must be at least 3 characters long')
            .required('*Sellers Name is required'),
         content: Yup.string()
            .trim()
            .min(6, '*About must be at least 6 characters long')
            .required('*About is required'),
         price: Yup.number()
            .required('*Price is required')
            .positive('*Price must be a positive number')
            .integer('*Price must be integer'),
         p_condition: Yup.string()
            .required('*Condition is required')
            .oneOf(
               ['new', 'used'],
               '*Condition must be either "new" or "used"'
            ),
      }),
      onSubmit: (newProduct) => {
         axiosNewProduct(newProduct);
      },
   });

   const axiosNewProduct = (newProduct) => {
      axios
         .post(PRODUCTS_URL, newProduct)
         .then((res) => {
            console.log(res.data);
            formik.resetForm();
         })
         .catch((error) => {
            console.warn('axiosLogin:', error);
            const errorFromAPI = error.response.data;
            formik.setErrors(errorFromAPI);
         });
   };
   return (
      <div className="flex md:p-20 items-center align-middle justify-center min-w-full min-h-full text-white">
         <div className="flex flex-col rounded-lg items-center bg-stone-800 justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 shadow-sm min-h-full ">
            <h1 className="mb-4 text-2xl text-center">Sell Item</h1>
            <form
               className="w-full flex flex-col justify-center items-center"
               onSubmit={formik.handleSubmit}
            >
               <select
                  id="cat_id"
                  className="w-full appearance-none text-black bg-white px-2 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cat_id}
               >
                  <option value={0} className="" disabled>
                     Select Category
                  </option>
                  {cats &&
                     cats.map((cat) => (
                        <option
                           className=""
                           key={cat.cat_id}
                           value={cat.cat_id}
                        >
                           {cat.cat_name}
                        </option>
                     ))}
               </select>
               <CustomFormik formik={formik} id={'cat_id'} />

               <CustomInput
                  css={'w-full'}
                  formik={formik}
                  type={'text'}
                  id={'title'}
                  placeholder={'Title'}
               />

               <textarea
                  className="w-full px-3 text-black rounded py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  id="content"
                  type="test"
                  placeholder="More information about selling item"
                  name="content"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.content}
               />
               <CustomFormik formik={formik} id={'content'} />

               <div className="flex w-full gap-6">
                  <CustomInput
                     css={'w-full'}
                     formik={formik}
                     type={'number'}
                     id={'price'}
                     placeholder={'Price'}
                  />
               </div>

               <div className="flex w-full gap-4 justify-center">
                  <CustomRadio id={'new'} formik={formik} />
                  <CustomRadio id={'used'} formik={formik} />
               </div>
               <CustomFormik formik={formik} id={'p_condition'} />

               <CustomButton
                  text={'Publish'}
                  css={
                     'w-full text-white font-semibold bg-amber-500  hover:bg-amber-400'
                  }
                  type={'submit'}
               />
            </form>
         </div>
      </div>
   );
};
