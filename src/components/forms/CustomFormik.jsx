export const CustomFormik = ({ formik, id }) => {
   return (
      <>
         {formik.touched[id] && formik.errors[id] ? (
            <p className="text-rose-400 w-full text-xs h-5">
               {formik.errors[id]}
            </p>
         ) : (
            <p className="h-5"></p>
         )}
      </>
   );
};
