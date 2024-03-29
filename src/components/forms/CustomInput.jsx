import { CustomFormik } from './CustomFormik';

/* eslint-disable react/prop-types */
export const CustomInput = ({ formik, type, id, placeholder, css, focus }) => {
   return (
      <div className="flex flex-col w-full">
         <input
            autoFocus={focus}
            className={`${css} px-3 rounded text-black self-start py-2  border border-stone-400  focus:outline-none focus:ring-2 focus:ring-amber-400`}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
         />
         <CustomFormik formik={formik} id={id} />
      </div>
   );
};
