import { Link, NavLink } from 'react-router-dom';

export const RightMenu = () => {
   return (
      <div className="flex flex-col gap-8 w-full h-fit p-8 text-center bg-stone-100 rounded">
         <div className="flex gap-2 items-center">
            <h1 className="font-semibold">Sort:</h1>
            <p className="hover:cursor-pointer hover:underline">Recent</p>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               fill="currentColor"
               className="bi bi-caret-down"
               viewBox="0 0 16 16"
            >
               <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
            </svg>
         </div>
         <div className="flex flex-col text-left gap-1 text-md text-stone-600">
            <h1 className="font-semibold text-base text-black">
               Filter by Categories
            </h1>
            <NavLink to={'/'} className=" hover:bg-stone-300 px-3 py-1 rounded">
               All Products
            </NavLink>
            <NavLink
               to={'/products/category/1'}
               className=" hover:bg-stone-300 px-3 py-1 rounded"
            >
               Desktop PCs
            </NavLink>
            <NavLink
               to={'/products/category/2'}
               className=" hover:bg-stone-300 px-3 py-1 rounded"
            >
               Desktop Parts
            </NavLink>
            <NavLink
               to={'/products/category/3'}
               className="  hover:bg-stone-300 px-3 py-1 rounded"
            >
               Laptops
            </NavLink>
            <NavLink
               to={'/products/category/4'}
               className=" hover:bg-stone-300 px-3 py-1 rounded"
            >
               Laptop Parts
            </NavLink>
            <NavLink
               to={'/products/category/5'}
               className="  hover:bg-stone-300 px-3 py-1 rounded"
            >
               Other
            </NavLink>
         </div>
         <div className="flex flex-col">
            <h1 className="text-xl font-semibold w-full text-center">
               Fallow us
            </h1>
            <p className="text-stone-600 leading-7">
               Stay up to date with latest news! <br /> Join us on Facebook,
               Twitter and LinkedIn.
            </p>
         </div>
      </div>
   );
};
