/* eslint-disable react/prop-types */
export const SellInputForkim = ({ formik, type, id, placeholder, style }) => {
   //    console.log(formik, type, id, placeholder, style);
   return (
      <input
         className={`${style} px-3 self-start py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400`}
         id={id}
         type={type}
         placeholder={placeholder}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.id}
      />
   );
};