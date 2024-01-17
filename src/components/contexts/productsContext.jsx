import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const PRODUCTS_URL = `http://localhost:3000/api/products`;
const CATs_URL = 'http://localhost:3000/api/categories';

const ProductsContext = createContext({
  products: null,
  productsByCategory: null,
});

ProductsContext.displayName = 'ProductsCtx';

export const ProductsCtxProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [cats, setCats] = useState(null);

  // fetch categories from API
  useEffect(() => {
    axios
      .get(CATs_URL)
      .then((res) => {
        setCats(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.warn('ERROR: ', err);
      });
  }, []);

  // fetch products from API
  useEffect(() => {
    axios
      .get(PRODUCTS_URL)
      .then((response) => {
        const productsFromAPI = response.data;
        const sortProdByDate = productsFromAPI.sort(
          (b, a) => new Date(a.date) - new Date(b.date),
        );
        setProducts(sortProdByDate);
      })
      .catch((error) => {
        console.log('error ===', error);
      });
  }, []);

  // fetch products categories from API

  const productsCtxValues = {
    products,
    setProducts,
    cats,
    setCats,
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
