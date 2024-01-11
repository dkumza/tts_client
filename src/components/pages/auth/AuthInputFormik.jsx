/* eslint-disable react/prop-types */
export const AuthInput = ({ formik, type, id, placeholder, style }) => {
   return (
      <div className="flex flex-col w-full">
         <input
            className={`${style} px-3 self-start py-2  border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400`}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.id}
         />
         {formik.touched[id] && formik.errors[id] ? (
            <p className="text-rose-400 w-full text-xs h-5">
               {formik.errors[id]}
            </p>
         ) : (
            <p className="h-5"></p>
         )}
      </div>
   );
};
