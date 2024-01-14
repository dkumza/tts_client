import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProduct } from './SingleProduct';

const BY_CAT_URL = 'http://localhost:3000/api/products/category';

export const ProductsBySearchList = () => {
   const [productsBySearch, setProductsBySearch] = useState(null);
   const { catID } = useParams();

   useEffect(() => {
      // TODO token
      axios
         .get(`${BY_CAT_URL}/${catID}`)
         .then((response) => {
            setProductsBySearch(response.data);
         })
         .catch((error) => {
            console.log('error ===', error);
         });
   }, [catID]);

   productsBySearch && console.log(productsBySearch);

   return (
      <div className="container mx-auto">
         <h1 className="pb-2">{+catID === 1 ? 'Desktop PCs' : 'Not PCs'}</h1>
         <ul className="flex gap-4 pb-4 flex-wrap justify-center items-center">
            {productsBySearch &&
               productsBySearch.map((product) => (
                  <SingleProduct key={product.id} ad={product} />
               ))}
         </ul>
      </div>
   );
};
