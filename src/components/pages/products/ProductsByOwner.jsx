import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { SingleProduct } from './SingleProduct';
import { useAuthContext } from '../../contexts/authContext';

const BY_USERNAME_URL = 'http://localhost:3000/api/owner';

export const ProductsByOwner = () => {
  const { username } = useAuthContext();
  const [productsByOwner, setProductsByOwner] = useState(null);

  useEffect(() => {
    axios
      .get(`${BY_USERNAME_URL}/${username}`)
      .then((response) => {
        setProductsByOwner(response.data);
      })
      .catch((error) => {
        console.log('error ===', error);
      });
  }, [username]);

  return (
    <div className="container mx-auto flex gap-4 px-12">
      <ul className="flex gap-4 pb-4 flex-col max-w-[970px] min-w-[1170px] items-center">
        {productsByOwner &&
          productsByOwner.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};
