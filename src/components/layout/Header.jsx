import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';
import Search from '../forms/Search';

export const Header = ({ setClickedMenu }) => {
   const { isUserLoggedIn, username } = useAuthContext();

   const handleMenuClick = (e) => {
      e.stopPropagation();
      setClickedMenu((prevState) => !prevState);
   };

   return (
      <div className="h-14 flex justify-center align-middle items-center bg-white shadow-sm relative">
         <div className="flex align-middle items-center justify-between bg-white  text-black container mx-auto h-full py-1">
            <div className="left flex justify-center align-middle items-center h-full">
               <Link
                  to={'/'}
                  className="align-middle items-center font-bold border-l-2 text-black hover:bg-amber-300 h-full flex w-28 justify-center text-2xl hover:cursor-pointer"
               >
                  LOGO
               </Link>
            </div>
            <Search />
            {isUserLoggedIn ? (
               <div className="flex align-middle justify-center items-center  h-full gap-2 text-sm">
                  <NavLink
                     to={'/sell'}
                     className="w-36 py-1  px-4  flex items-center justify-center truncate border-t-2 border-b-2 hover:border-stone-200 border-lime-400 bg-lime-400 hover:bg-sky-700 hover:text-amber-400"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="mr-2 bi bi-file-earmark-plus"
                        viewBox="0 0 16 16"
                     >
                        <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                     </svg>
                     Sell Item
                  </NavLink>

                  <div
                     id="name"
                     className="w-36 border  px-4 py-1 flex items-center gap-1 justify-center truncate border-t-2 border-b-2 hover:border-stone-200 border-amber-400 bg-amber-400 hover:bg-sky-700 hover:text-amber-400 hover:cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     <svg
                        id="name"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="mr-2 bi bi-person-lines-fill"
                        viewBox="0 0 16 16"
                     >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                     </svg>
                     {username}
                  </div>
               </div>
            ) : (
               <div className="flex align-middle justify-center items-center  gap-2 text-sm">
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
