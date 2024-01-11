export const CustomButton = ({ css, text, type }) => {
   return (
      <button type={type} className={`${css} py-2 mb-4 `}>
         {text}
      </button>
   );
};
