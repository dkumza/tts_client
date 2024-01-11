import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from '../../authContext';
import { CustomInput } from '../../forms/CustomInput';

const newAd = {
   title: 'Edited Post 1',
   username: 'Username 1',
   date: '2022-07-07',
   content: 'Test content',
   cat_id: 1001,
   price: 201,
   sub_id: 4001,
};

const categories = [
   {
      cat_id: 1,
      title: 'Computing',
   },
   {
      cat_id: 2,
      title: 'Phones ',
   },
];
const subCategories = [
   {
      cat_id: 1,
      title: 'Computing',
   },
   {
      cat_id: 2,
      title: 'Phones ',
   },
];

export const Sell = () => {
   const { username } = useAuthContext();

   const formik = useFormik({
      initialValues: {
         title: '',
         cat_id: 0,
         content: '',
         price: '',
         username,
         sub_id: '',
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
      }),
      onSubmit: (newObj) => {
         console.log('submited');
         console.log(newObj);
      },
   });
   return (
      <div className="px-4  md:px-20 md:p-8 container mx-auto flex flex-col justify-center items-center h-full">
         <div className="flex w-full max-w-md min-h-full bg-white px-12 py-14 flex-col shadow-sm">
            <h1 className="mb-4 text-2xl text-center">Sell Item</h1>
            <form
               className="w-full flex flex-col justify-center items-center"
               onSubmit={formik.handleSubmit}
            >
               <select
                  id="cat_id"
                  className="w-full bg-white px-2 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cat_id}
               >
                  <option value={0} className="" disabled>
                     Select Category
                  </option>
                  {categories &&
                     categories.map((cat, cat_id) => (
                        <option className="" key={cat_id} value={cat.cat_id}>
                           {cat.title}
                        </option>
                     ))}
               </select>
               {formik.touched.cat_id && formik.errors.cat_id ? (
                  <p className="text-rose-400 w-full text-xs h-5">
                     {formik.errors.cat_id}
                  </p>
               ) : (
                  <p className="h-5"></p>
               )}
               <CustomInput
                  style={'w-full'}
                  formik={formik}
                  type={'text'}
                  id={'title'}
                  placeholder={'Title'}
               />

               <textarea
                  className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  id="content"
                  type="test"
                  placeholder="More information about selling item"
                  name="content"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.content}
               />
               {formik.touched.content && formik.errors.content ? (
                  <p className="text-rose-400 w-full text-xs h-5">
                     {formik.errors.content}
                  </p>
               ) : (
                  <p className="h-5"></p>
               )}
               <div className="flex w-full gap-6">
                  <CustomInput
                     style={'w-full'}
                     formik={formik}
                     type={'number'}
                     id={'price'}
                     placeholder={'Price'}
                  />
               </div>

               <button
                  type="submit"
                  className="min-w-full py-2 my-1 text-white font-semibold bg-amber-400  hover:bg-amber-300 w-2/3"
               >
                  Publish
               </button>
            </form>
         </div>
      </div>
   );
};
