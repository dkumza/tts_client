import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../authContext';

export const Header = ({ setClickedMenu }) => {
   const { isUserLoggedIn, username } = useAuthContext();

   const handleMenuClick = (e) => {
      e.stopPropagation();
      setClickedMenu((prevState) => !prevState);
   };

   return (
      <div className="h-10 flex justify-center align-middle items-center bg-white shadow-sm">
         <div className="flex align-middle items-center justify-between bg-white  text-black container mx-auto h-full py-1">
            <div className="left flex justify-center align-middle items-center h-full">
               <Link
                  to={'/'}
                  className="align-middle font-bold border-l-2 text-black hover:bg-amber-300 h-full flex w-28 justify-center text-2xl hover:cursor-pointer"
               >
                  LOGO
               </Link>
            </div>
            {isUserLoggedIn ? (
               <div className="flex align-middle justify-center items-center  h-full gap-2 text-sm">
                  <NavLink
                     to={'/sell'}
                     className="w-36 px-4 h-full flex items-center justify-center truncate border-t-2 border-b-2 hover:border-stone-200 border-lime-400 bg-lime-400 hover:bg-sky-700 hover:text-amber-400"
                  >
                     Sell Item{' '}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                     >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                     </svg>
                  </NavLink>

                  <div
                     id="name"
                     className="w-36 border font-semibold px-4 h-full flex items-center gap-1 justify-center truncate border-t-2 border-b-2 hover:border-stone-200 border-amber-400 bg-amber-400 hover:bg-sky-700 hover:text-amber-400 hover:cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     {username}
                     <svg
                        id="name"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fillRule="evenodd"
                           d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                     </svg>
                  </div>
               </div>
            ) : (
               <div className="flex align-middle justify-center items-center  h-full gap-2 text-sm">
                  <NavLink to={'/login'} className="login-menu-items">
                     Login
                  </NavLink>
                  <NavLink to={'/signup'} className="login-menu-items">
                     Sign Up
                  </NavLink>
               </div>
            )}
         </div>
      </div>
   );
};
