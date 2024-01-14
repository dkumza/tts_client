import axios from 'axios';
import { useEffect, useState } from 'react';
import { SingleProduct } from './SingleProduct';
import { Link } from 'react-router-dom';
import { RightMenu } from '../../menus/RightMenu';

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
         <RightMenu />
      </div>
   );
};
