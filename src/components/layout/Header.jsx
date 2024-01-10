import { NavLink } from 'react-router-dom';

export const Header = ({ isUserLogged, userEmail, handleLogOut }) => {
   console.log(isUserLogged);
   const menuItems = [
      { name: 'Recent', to: '/' },
      { name: 'Computing', to: '/' },
      { name: 'Phones', to: '/' },
      isUserLogged
         ? { name: userEmail, to: '/' }
         : { name: 'Log In', to: '/login' },
      isUserLogged
         ? { name: 'Log Out', to: '/', fn: handleLogOut }
         : { name: 'Sing Up', to: '/signup' },
   ];

   return (
      <div className="h-12 flex justify-between bg-black shadow text-white">
         <div className="left flex justify-center align-middle items-center">
            <div className="div  align-middle  h-full flex items-center w-28 justify-center text-xl font-semibold">
               LOGO
            </div>
            {isUserLogged && (
               <NavLink className="w-28 h-full  flex items-center justify-center truncate">
                  Sell
               </NavLink>
            )}
         </div>
         <nav className="right flex align-middle justify-center items-center hover:cursor-pointer">
            {menuItems &&
               menuItems.map((item, index) => (
                  <NavLink
                     onClick={item.fn}
                     key={index}
                     to={item.to}
                     className="w-28 h-full   flex items-center justify-center truncate"
                  >
                     {item.name}
                  </NavLink>
               ))}
         </nav>
      </div>
   );
};
