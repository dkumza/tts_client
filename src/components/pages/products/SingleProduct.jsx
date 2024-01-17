import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';

export const SingleProduct = ({ product }) => {
  const { username } = useAuthContext();

  let dateDay;
  if (product) {
    dateDay = Math.floor(
      (new Date() - new Date(product.date)) / (1000 * 60 * 60 * 24),
    );
  }

  return (
    <li
      className={`${
        username === product.username ? 'bg-lime-100' : ''
      } hover:bg-amber-50 rounded text-md container  min-h-[184px] max-h-[184px] flex shadow`}
    >
      <div className="div flex min-w-full  gap-1 ">
        <div className="flex min-w-full flex-1 h-full">
          <div className="img flex flex-col justify-between  h-full">
            <img
              className="border-r h-full min-w-[352px]"
              src=""
              alt={product.title}
            />
          </div>
          <div className="flex w-full flex-col justify-between align-middle items-start px-6 py-4">
            <div className="title flex flex-col gap-2 w-full">
              <div className="title text-xs flex gap-2 items-center justify-between w-full">
                <div className="flex gap-2 items-center w-full">
                  <div className="bg-amber-400 rounded text-black px-2 py-1 capitalize">
                    {product.p_condition}
                  </div>
                  <Link
                    to={`/products/category/${product.cat_id}`}
                    className="bg-sky-300 px-2 py-1 text-black rounded"
                  >
                    {product.cat_name}
                  </Link>
                  <div
                    className={`${
                      dateDay > 30 ? 'bg-amber-400' : 'bg-lime-400'
                    } px-2 py-1 rounded`}
                  >
                    <span className="font-medium">
                      {dateDay === 0
                        ? 'Listed: Today'
                        : `Listed: ${dateDay} days ago`}
                    </span>
                  </div>
                </div>
              </div>
              <div className="title flex flex-col gap-2">
                <h1 className="text-md font-semibold">{product.title}</h1>
                <p className="text-sm">{product.content}</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="text-2xl font-semibold"> € {product.price}</div>
              <Link
                to={`/product/${product.id}`}
                className="py-1 bg-sky-400 px-6 rounded text-white font-semibold"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
