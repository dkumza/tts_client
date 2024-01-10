export const Header = () => {
   const menuItems = [
      { name: 'Computing' },
      { name: 'Phones' },
      { name: 'Log In' },
      { name: 'Sing Up' },
   ];
   return (
      <div className="h-12 flex justify-between bg-white shadow">
         <div className="left flex justify-center align-middle items-center">
            <div className="div border  align-middle  h-full flex items-center w-28 justify-center">
               LOGO
            </div>
         </div>
         <div className="right flex align-middle justify-center items-center hover:cursor-pointer">
            {menuItems &&
               menuItems.map((item, index) => (
                  <div
                     key={index}
                     className="w-28 h-full border  flex items-center justify-center"
                  >
                     {item.name}
                  </div>
               ))}
         </div>
      </div>
   );
};
