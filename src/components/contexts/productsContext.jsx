import axios from 'axios';
import { useFormik } from 'formik';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [initialValues, setInitialValues] = useState(null);

  const navigate = useNavigate();

  // fetch categories from API
  useEffect(() => {
    axios
      .get(CATs_URL)
      .then((res) => {
        setCats(res.data);
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

  const handleEditProduct = (product) => {
    // remove specified data from product
    const { date, ...rest } = product;
    setInitialValues(rest);
    navigate('/sell');
  };

  const formik = useFormik({
    initialValues: initialValues,
  });

  const productsCtxValues = {
    products,
    setProducts,
    cats,
    setCats,
    handleEditProduct,
    initialValues,
    setInitialValues,
    formik,
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
