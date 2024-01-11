/* eslint-disable react/prop-types */
export const CustomRadio = ({ id, formik }) => {
   return (
      <div
         id={id}
         role="button"
         tabIndex="0"
         onClick={() => {
            formik.setFieldValue('condition', id);
         }}
         className={`border text-center w-full text-gray-600 cursor-pointer py-2 px-4 ${
            formik.values.condition === id
               ? 'bg-amber-300 text-white'
               : 'bg-white'
         }`}
      >
         New
      </div>
   );
};
