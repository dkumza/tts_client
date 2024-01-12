import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../authContext';

export const Header = () => {
   const { isUserLoggedIn, logout, username } = useAuthContext();

   const navCss = `px-4 h-full flex items-center justify-center truncate border-t-2 border-b-2 hover:border-stone-200 border-amber-400 bg-amber-400 hover:bg-sky-700 hover:text-amber-400`;

   return (
      <div className="h-10 flex justify-center align-middle items-center bg-white shadow-sm">
         <div className="flex align-middle items-center justify-between bg-white  text-black container mx-auto h-full py-1">
            <div className="left flex justify-center align-middle items-center h-full">
               <Link
                  to={'/'}
                  className="align-middle font-bold bg-amber-400 text-black hover:bg-amber-300 h-full flex w-28 justify-center text-2xl hover:cursor-pointer"
               >
                  LOGO
               </Link>
            </div>
            {isUserLoggedIn ? (
               <div className="flex align-middle justify-center items-center  h-full gap-2 text-sm">
                  <NavLink to={'/sell'} className={`${navCss}`}>
                     Sell
                  </NavLink>
                  <div className="px-2 h-full   flex items-center justify-center truncate border-t-2 border-b-2 border-white ">
                     {username}
                  </div>
                  <Link
                     to={'/'}
                     onClick={logout}
                     className="px-4 h-full   flex items-center justify-center truncate border-t-2 border-b-2 border-white hover:bg-sky-700 hover:text-amber-400"
                  >
                     Log Out
                  </Link>
               </div>
            ) : (
               <div className="flex align-middle justify-center items-center  h-full gap-2 text-sm">
                  <NavLink
                     to={'/login'}
                     className="px-4 h-full   flex items-center justify-center truncate border-t-2 border-b-2 border-white hover:border-amber-300 hover:bg-amber-300"
                  >
                     Login
                  </NavLink>
                  <NavLink
                     to={'/signup'}
                     className="px-4 h-full   flex items-center justify-center truncate border-t-2 border-b-2 border-white hover:border-amber-300 hover:bg-amber-300"
                  >
                     Sign Up
                  </NavLink>
               </div>
            )}
         </div>
      </div>
   );
};
