import axios from 'axios';
import { useEffect, useState } from 'react';
import { SingleAd } from './SingleAd';

const ADS_URL = `http://localhost:3000/api/ads`;

export const AdsList = () => {
   const [ads, setAds] = useState(null);

   useEffect(() => {
      // if token tada
      getPosts(ADS_URL);

      function getPosts(ADS_URL) {
         axios
            .get(ADS_URL)
            .then((response) => {
               console.log('response ===', response);
               const ads = response.data;
               setAds(ads);
            })
            .catch((error) => {
               console.log('error ===', error);
            });
      }
   }, []);

   console.log(ads);
   return (
      <div className="px-4">
         <h1 className="py-4">All items</h1>
         <ul className="flex gap-4 pb-4 flex-wrap justify-center">
            {ads && ads.map((ad) => <SingleAd key={ad.id} ad={ad} />)}
         </ul>
      </div>
   );
};
