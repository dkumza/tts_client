import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';
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
         <div className=" mx-auto w-full  flex flex-col items-end justify-end px-6">
            <ul
               className="flex w-48 rounded  flex-col items-end justify-center align-middle z-10 text-sm  gap-1 bg-stone-700 text-stone-300"
               ref={controlMenuRef}
            >
               <li className="w-48 truncate text-center px-3 py-1  font-semibold">
                  Hi, {username}
               </li>
               <li className="w-48 text-right px-3 py-1 flex gap-2 items-center justify-center  hover:bg-stone-500  hover:text-amber-400 cursor-pointer">
                  My Account
               </li>
               <li className="w-48 text-right px-3 py-1 flex gap-2 items-center justify-center  hover:bg-stone-500  hover:text-amber-400 cursor-pointer">
                  My Wallet
               </li>
               <li className="w-48 text-right px-3 py-1 flex gap-2 items-center justify-center  hover:bg-stone-500  hover:text-amber-400 cursor-pointer">
                  My Items
               </li>
               <Link
                  to={'/'}
                  onClick={() => {
                     logout();
                     setClickedMenu((prevState) => !prevState);
                  }}
                  className="w-48 flex gap-2 items-center justify-center text-right px-3 py-1 hover:bg-stone-500  hover:text-amber-400 cursor-pointer"
               >
                  Sign Out
               </Link>
            </ul>
         </div>
      </div>
   );
};