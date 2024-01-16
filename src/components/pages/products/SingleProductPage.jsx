import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CommentsSection } from '../../comments/CommentsSection';

const PRODUCT_URL = 'http://localhost:3000/api/products';

export const SingleProductPage = () => {
  const [productFromAPI, setProductFromAPI] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    axios
      .get(`${PRODUCT_URL}/${productID}`)
      .then((response) => {
        const product = response.data;
        setProductFromAPI(product);
      })
      .catch((error) => {
        console.log('error ===', error);
      });
  }, [productID]);

  let dateDay;

  if (productFromAPI) {
    dateDay = Math.floor((new Date() - new Date(productFromAPI.date)) / (1000 * 60 * 60 * 24));
  }

  return (
    <div className="container mx-auto  min-h-full my-8 px-12">
      {!productFromAPI && <p>Loading</p>}
      <div className="min-h-full">
        {productFromAPI && (
          <div className="div flex md:flex-row flex-col gap-6  min-h-full border ">
            <div className="left bg-white md:w-6/12 min-h-full flex flex-col">
              <div className="h-full ">
                <img
                  className="h-full min-w-full min-h-[220px] border"
                  src=""
                  alt={productFromAPI.title}
                />
              </div>

              <div className="flex justify-between m-4 h-12 items-center">
                <div className="price text-3xl font-semibold py-2 text-gray-800">
                  € {productFromAPI.price}
                </div>
                <div className="price text-xl font-semibold px-6 py-2 rounded bg-amber-400 hover:bg-sky-600 hover:cursor-pointer hover:text-amber-400">
                  BUY
                </div>
              </div>
            </div>
            <div className="right w-full flex flex-col gap-4 justify-between  border pt-">
              <div className="title flex flex-col gap-2 justify-start">
                <h1 className="text-4xl font-semibold text-stone-700">{productFromAPI.title}</h1>
                <p className="py-1 text-xs">
                  By{' '}
                  <span className="bg-white ml-1 px-2 font-medium py-1 rounded">
                    {productFromAPI.username}
                  </span>
                </p>

                <div className="flex justify-between text-sm pt-2">
                  <div className="flex gap-2 items-center">
                    <p
                      className={`${
                        productFromAPI.p_condition === 'used' ? 'bg-amber-400' : 'bg-lime-400'
                      } capitalize w-fit px-4 py-1 rounded`}
                    >
                      {productFromAPI.p_condition}
                    </p>
                    <Link
                      to={`/products/category/${productFromAPI.cat_id}`}
                      className="bg-sky-300 px-2 py-1 text-black rounded"
                    >
                      {productFromAPI.cat_name}
                    </Link>
                    <div
                      className={`${
                        dateDay > 30 ? 'bg-amber-400' : 'bg-lime-400'
                      } px-2 py-1 rounded`}
                    >
                      <span className="font-medium">
                        {dateDay === 0 ? 'Listed: Today' : `Listed: ${dateDay} days ago`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="font-semibold py-2">Product information from seller</h1>
                <p className="bg-white p-4 text-sm">
                  {/* {productFromAPI.content} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error adipisci
                  possimus sequi itaque dolorum eveniet sed doloremque sunt autem culpa ullam
                  repellat provident, laboriosam quibusdam impedit nemo repellendus consequuntur
                  asperiores dolor eum, dolores quo voluptate libero! Mollitia eius soluta molestias
                  rem impedit dolore, sunt saepe laudantium, sequi, voluptatem ipsam?
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="comments mt-8">
        <CommentsSection productID={productID} />
      </div>
    </div>
  );
};
