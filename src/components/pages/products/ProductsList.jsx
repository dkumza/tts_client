import { SingleProduct } from './SingleProduct';
import { RightMenu } from '../../menus/RightMenu';
import { useProductsContext } from '../../contexts/productsContext';

export const ProductsList = () => {
  const { products } = useProductsContext();

  return (
    <div className="container mx-auto flex gap-4 px-12">
      <ul className="flex gap-4 pb-4 flex-col max-w-[970px] min-w-[1170px] justify-center items-center">
        {products &&
          products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
      </ul>
      <RightMenu />
    </div>
  );
};
