import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';
import Search from '../forms/Search';

export const Header = ({ setClickedMenu }) => {
   const { isUserLoggedIn, username } = useAuthContext();

   const handleMenuClick = (e) => {
      setClickedMenu((prevState) => !prevState);
   };

   return (
      <div
         style={{ backgroundColor: '#18181c' }}
         className="h-16 flex justify-center align-middle items-center  shadow-sm relative px-12"
      >
         <div
            style={{ backgroundColor: '#18181c' }}
            className="flex align-middle items-center justify-between  text-gray-300 w-full h-full py-1"
         >
            <div className="left flex justify-center align-middle items-center h-full gap-6">
               <Link
                  to={'/'}
                  className="items-center text-white font-bold h-full flex justify-start text-2xl hover:cursor-pointer"
               >
                  LOGO
               </Link>
               <Link className="menu">
                  <div className="m1">STORE</div>
               </Link>
               <Link className="menu">
                  <div className="m1">Support</div>
               </Link>
               <Link className="menu">
                  <div className="m1">About</div>
               </Link>
               <Link className="menu">
                  <div className="m1">More</div>
               </Link>
            </div>

            {/* <Search /> */}
            {isUserLoggedIn ? (
               <div className="flex align-middle justify-center items-center  h-full gap-6 text-sm">
                  <Link
                     to={'/sell'}
                     className="w-36 py-1  px-4  flex items-center rounded justify-center truncate border-t-2 border-b-2 text-black  border-sky-400 bg-sky-400 font-semibold hover:bg-stone-500 hover:border-stone-500  hover:text-amber-400"
                  >
                     Sell
                  </Link>

                  <Link
                     id="name"
                     onClick={handleMenuClick}
                     className="w-8 h-8 relative hover:cursor-pointer bg-stone-700 p-2 rounded-full items-center flex justify-center align-middle"
                  >
                     <div id="name">{username.charAt(0).toUpperCase()}</div>
                     <div
                        id="name"
                        className="h-2 w-2 rounded-full bg-lime-400 absolute right-0 bottom-0"
                     ></div>
                  </Link>
               </div>
            ) : (
               <div className="flex align-middle justify-center items-center  gap-6 text-sm">
                  <NavLink
                     to={'/login'}
                     className="w-36 py-1  px-4  flex items-center rounded justify-center truncate border-t-2 border-b-2 text-black  border-lime-400 bg-lime-400 font-semibold hover:bg-stone-500 hover:border-stone-500  hover:text-amber-400"
                  >
                     Sing In
                  </NavLink>

                  <NavLink
                     to={'/login'}
                     className="w-8 h-8 bg-stone-700 p-2 rounded-full items-center flex justify-center align-middle"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                     >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                     </svg>
                  </NavLink>
               </div>
            )}
         </div>
      </div>
   );
};
