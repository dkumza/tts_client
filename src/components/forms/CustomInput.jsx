import { CustomFormik } from './CustomFormik';

/* eslint-disable react/prop-types */
export const CustomInput = ({
   formik,
   type,
   id,
   placeholder,
   style,
   focus,
}) => {
   return (
      <div className="flex flex-col w-full">
         <input
            autoFocus={focus}
            className={`${style} px-3 self-start py-2  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400`}
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
