import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProduct } from './SingleProduct';

const SEARCH_URL = 'http://localhost:3000/api/search';

export const ProductsBySearchList = () => {
   const [productsBySearch, setProductsBySearch] = useState(null);
   const { string } = useParams();

   useEffect(() => {
      axios
         .get(`${SEARCH_URL}/${string}`)
         .then((response) => {
            setProductsBySearch(response.data);
         })
         .catch((error) => {
            console.log('error ===', error);
         });
   }, [string]);

   return (
      <div className="container mx-auto px-12">
         {/* <h1 className="pb-2">{+catID === 1 ? 'Desktop PCs' : 'Not PCs'}</h1> */}
         <ul className="flex gap-4 pb-4 flex-wrap justify-center items-center max-w-[1170px]">
            {productsBySearch &&
               productsBySearch.map((product) => (
                  <SingleProduct key={product.id} ad={product} />
               ))}
         </ul>
      </div>
   );
};
