import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { CustomFormik } from './CustomFormik';

const Search = () => {
   const history = useNavigate();

   const formik = useFormik({
      initialValues: {
         search: '',
      },
      validationSchema: Yup.object({
         search: Yup.string().trim().min(3).required(),
      }),
      onSubmit: (data) => {
         history(`/search/${data.search}`);
         formik.resetForm();
      },
   });

   return (
      <div className="flex container mx-auto my-6 items-center gap-4 px-12">
         <form
            onSubmit={formik.handleSubmit}
            className=" md:w-[220px] flex justify-between items-center  rounded bg-white"
         >
            <input
               id="search"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.search}
               className="focus:outline-none rounded w-full py-2 pl-4 container placeholder:text-sm"
               type="text"
               placeholder="Search for products"
            />

            <button
               type="submit"
               className=" rounded px-4 py-2 hover:cursor-pointer"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
               >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
               </svg>
            </button>
         </form>

         <div className="flex gap-4">
            <Link className="">Discover</Link>
            <Link className="">Latest</Link>
            <Link className="">See All</Link>
         </div>
      </div>
   );
};

export default Search;
