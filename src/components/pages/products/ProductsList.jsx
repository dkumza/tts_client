import axios from 'axios';
import { useEffect, useState } from 'react';
import { SingleProduct } from './SingleProduct';
import { Link } from 'react-router-dom';

const ADS_URL = `http://localhost:3000/api/products`;

export const ProductsList = () => {
   const [ads, setAds] = useState(null);

   useEffect(() => {
      // TODO token
      axios
         .get(ADS_URL)
         .then((response) => {
            const ads = response.data;
            setAds(ads);
         })
         .catch((error) => {
            console.log('error ===', error);
         });
   }, []);

   return (
      <div className="container mx-auto flex gap-4">
         {/* <h1 className="py-4 px-3">All items</h1> */}
         <ul className="flex gap-4 pb-4 flex-col max-w-[970px] min-w-[1170px] justify-center items-center">
            {ads && ads.map((ad) => <SingleProduct key={ad.id} ad={ad} />)}
         </ul>
         <div className="flex flex-col gap-8 w-full h-fit p-8 text-center bg-stone-100 rounded">
            <div className="flex gap-2">
               <h1 className="font-semibold">Sort:</h1>
               <p>Recent</p>
            </div>
            <div className="flex flex-col text-left gap-1 text-md text-stone-600">
               <h1 className="font-semibold text-base text-black">
                  Filter by Categories
               </h1>
               <Link className=" hover:bg-stone-300 px-3 py-1 rounded">
                  Desktop PCs
               </Link>
               <Link className=" hover:bg-stone-300 px-3 py-1 rounded">
                  Desktop Parts
               </Link>
               <Link className="  hover:bg-stone-300 px-3 py-1 rounded">
                  Laptops
               </Link>
               <Link className=" hover:bg-stone-300 px-3 py-1 rounded">
                  Laptop Parts
               </Link>
               <Link className="  hover:bg-stone-300 px-3 py-1 rounded">
                  Other
               </Link>
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
      </div>
   );
};
