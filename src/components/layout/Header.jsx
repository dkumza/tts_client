import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
   const menuItems = [
      { name: 'Computing', to: '/' },
      { name: 'Phones', to: '/' },
      { name: 'Log In', to: '/login' },
      { name: 'Sing Up', to: '/signup' },
   ];
   console.log(menuItems);
   return (
      <div className="h-12 flex justify-between bg-white shadow">
         <div className="left flex justify-center align-middle items-center">
            <div className="div border  align-middle  h-full flex items-center w-28 justify-center">
               LOGO
            </div>
         </div>
         <nav className="right flex align-middle justify-center items-center hover:cursor-pointer">
            {menuItems &&
               menuItems.map((item, index) => (
                  <NavLink
                     key={index}
                     to={item.to}
                     className="w-28 h-full border  flex items-center justify-center"
                  >
                     {item.name}
                  </NavLink>
               ))}
         </nav>
      </div>
   );
};
