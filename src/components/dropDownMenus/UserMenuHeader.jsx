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
               className="flex flex-col items-end z-10 text-sm divide-y divide-amber-400 bg-amber-400"
               ref={controlMenuRef}
            >
               <li className="w-36 truncate text-center px-3 py-1  font-semibold">
                  Hi, {username}
               </li>
               <li className="w-36 text-center px-3 py-1  hover:bg-sky-700 hover:text-amber-400 cursor-pointer">
                  My Items
               </li>
               <Link
                  to={'/'}
                  onClick={() => {
                     logout();
                     setClickedMenu((prevState) => !prevState);
                  }}
                  className="w-36 text-center px-3 py-1 hover:bg-sky-700 hover:text-amber-400 cursor-pointer"
               >
                  Logout
               </Link>
            </ul>
         </div>
      </div>
   );
};
