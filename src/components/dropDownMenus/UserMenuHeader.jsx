import { Link } from 'react-router-dom';
import { useAuthContext } from '../authContext';
import { useEffect, useRef } from 'react';

export const UserMenuHeader = ({ clickedMenu, setClickedMenu }) => {
   const { logout, username } = useAuthContext();
   const controlMenuRef = useRef();

   useEffect(() => {
      function handleClickOutside(event) {
         if (
            event.target.id !== 'name' &&
            controlMenuRef.current &&
            !controlMenuRef.current.contains(event.target)
         )
            setClickedMenu(false);
      }

      document.addEventListener('mousedown', handleClickOutside);
   }, [controlMenuRef, clickedMenu, setClickedMenu]);

   return (
      <div className="absolute right-0 w-full z-0">
         <div className="container mx-auto w-full  flex flex-col items-end justify-end">
            <ul
               className="flex  flex-col items-end justify-center align-middle z-10 text-sm divide-y divide-white gap-1 bg-amber-400"
               ref={controlMenuRef}
            >
               <li className="w-36 truncate text-left px-3 py-1  font-semibold">
                  Hi, {username}
               </li>
               <li className="w-36 text-right px-3 py-1 flex gap-2 items-center  hover:bg-sky-700 hover:text-amber-400 cursor-pointer">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="18"
                     height="18"
                     fill="currentColor"
                     className="bi bi-folder2-open"
                     viewBox="0 0 16 16"
                  >
                     <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
                  </svg>
                  My Items
               </li>
               <Link
                  to={'/'}
                  onClick={() => {
                     logout();
                     setClickedMenu((prevState) => !prevState);
                  }}
                  className="w-36 flex gap-2 items-center text-right px-3 py-1 hover:bg-sky-700 hover:text-amber-400 cursor-pointer"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="18"
                     height="18"
                     fill="currentColor"
                     className="bi bi-door-open"
                     viewBox="0 0 16 16"
                  >
                     <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                     <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                  </svg>
                  Logout
               </Link>
            </ul>
         </div>
      </div>
   );
};
