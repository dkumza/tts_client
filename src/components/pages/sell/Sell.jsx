import { useFormik } from 'formik';
import { SellInputForkim } from './SellInputForkim';
import * as Yup from 'yup';

const newAd = {
   title: 'Edited Post 1',
   author: 'Author 1',
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
   const formik = useFormik({
      initialValues: {
         title: '',
         cat_id: 'default',
         content: '',
         price: '',
         author: '',
         sub_id: '',
      },
      validationSchema: Yup.object({
         title: Yup.string()
            .min(3, '*Title must be at least 3 characters long')
            .required('*Title is required'),
         author: Yup.string()
            .min(3, '*Author name must be at least 3 characters long')
            .required('*Sellers Name is required'),
      }),
      onSubmit: (newObj) => {
         console.log('submited');
         console.log(newObj);
      },
   });
   return (
      <div className="px-4  md:px-20 md:p-8 container mx-auto flex flex-col justify-center items-center h-full">
         <div className="flex w-4/12 min-h-full bg-white px-12 py-14 flex-col shadow-sm">
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
                  <option className="" value={'default'} disabled>
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
                  <p className="text-rose-400 w-full text-sm h-5">
                     {formik.errors.cat_id}
                  </p>
               ) : (
                  <p className="h-5"></p>
               )}
               <SellInputForkim
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
                  placeholder="Short about selling item"
                  name="content"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.content}
               />
               {formik.touched.content && formik.errors.content ? (
                  <p className="text-rose-400 w-full text-sm h-5">
                     {formik.errors.content}
                  </p>
               ) : (
                  <p className="h-5"></p>
               )}
               <div className="flex w-full gap-6">
                  <SellInputForkim
                     style={'w-full'}
                     formik={formik}
                     type={'number'}
                     id={'price'}
                     placeholder={'Price'}
                  />

                  <SellInputForkim
                     style={'w-full'}
                     formik={formik}
                     type={'text'}
                     id={'author'}
                     placeholder={'Seller Name'}
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
