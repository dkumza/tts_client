import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProduct } from './SingleProduct';
import { RightMenu } from '../../menus/RightMenu';

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

  return (
    <div className="container mx-auto flex gap-4 px-12">
      <ul className="flex gap-4 pb-4 flex-col max-w-[970px] min-w-[1170px] items-center">
        {productsByCat &&
          productsByCat.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
      </ul>
      <RightMenu />
    </div>
  );
};
