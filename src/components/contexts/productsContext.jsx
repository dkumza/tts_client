import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const PRODUCTS_URL = `http://localhost:3000/api/products`;

const ProductsContext = createContext({
   products: null,
   productsByCategory: null,
});

ProductsContext.displayName = 'ProductsCtx';

export const ProductsCtxProvider = ({ children }) => {
   const [products, setProducts] = useState(null);
   const [productsByCategory, setProductsByCategory] = useState(null);

   // fetch products from API
   useEffect(() => {
      // TODO token
      axios
         .get(PRODUCTS_URL)
         .then((response) => {
            const productsFromAPI = response.data;
            setProducts(productsFromAPI);
         })
         .catch((error) => {
            console.log('error ===', error);
         });
   }, []);

   // fetch products categories from API

   const productsCtxValues = {
      products,
      productsByCategory,
   };

   return (
      <ProductsContext.Provider value={productsCtxValues}>
         {children}
      </ProductsContext.Provider>
   );
};

export function useProductsContext() {
   return useContext(ProductsContext);
}
