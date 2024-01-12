import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProduct } from './SingleProduct';

const BY_CAT_URL = 'http://localhost:3000/api/products/category';

export const ProductsByCategoryList = () => {
   const [productsByCat, setProductsByCat] = useState(null);
   const { catID } = useParams();

   useEffect(() => {
      // TODO token
      axios
         .get(`${BY_CAT_URL}/${catID}`)
         .then((response) => {
            setProductsByCat(response.data);
         })
         .catch((error) => {
            console.log('error ===', error);
         });
   }, [catID]);

   productsByCat && console.log(productsByCat);

   return (
      <div className="container mx-auto">
         <h1 className="py-4 px-3">
            {+catID === 1 ? 'Desktop PCs' : 'Not PCs'}
         </h1>
         <ul className="flex gap-4 pb-4 flex-wrap justify-center items-center">
            {productsByCat &&
               productsByCat.map((product) => (
                  <SingleProduct key={product.id} ad={product} />
               ))}
         </ul>
      </div>
   );
};
