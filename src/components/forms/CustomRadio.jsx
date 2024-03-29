/* eslint-disable react/prop-types */
export const CustomRadio = ({ id, formik }) => {
  return (
    <div
      id={id}
      role="button"
      tabIndex="0"
      onClick={() => {
        formik.setFieldValue('p_condition', id);
      }}
      className={`border rounded text-center capitalize w-full text-gray-600 cursor-pointer py-2 px-4 ${
        formik.values.p_condition === id ? 'bg-amber-400' : 'bg-white'
      }`}
    >
      {id}
    </div>
  );
};
