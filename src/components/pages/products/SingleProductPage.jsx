import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PRODUCT_URL = 'http://localhost:3000/api/products';

const product = {
   title: 'MacBook Pro M2',
   username: 'skirma',
   date: '2024-01-12',
   content: 'new laptop',
   cat_id: '3',
   price: 3000,
   p_condition: 'new',
};

export const SingleProductPage = () => {
   const [productFromAPI, setProductFromAPI] = useState(null);
   const { productID } = useParams();

   useEffect(() => {
      // TODO token
      axios
         .get(`${PRODUCT_URL}/${productID}`)
         .then((response) => {
            const product = response.data;
            console.log(product);
            setProductFromAPI(product);
         })
         .catch((error) => {
            console.log('error ===', error);
         });
   }, [productID]);

   let dateDay;

   if (productFromAPI) {
      dateDay = Math.floor(
         (new Date() - new Date(productFromAPI.date)) / (1000 * 60 * 60 * 24)
      );
   }

   return (
      <div className="container mx-auto min-h-full my-8">
         <div className="py-2  flex align-middle items-center gap-1">
            <Link
               className=" hover:cursor-pointer text-gray-500 hover:text-black"
               to={'/'}
            >
               All Products /
            </Link>
            {productFromAPI && (
               <Link
                  to={`/products/category/${productFromAPI.cat_id}`}
                  className=" hover:cursor-pointer text-gray-500 hover:text-black"
               >
                  {/* {productFromAPI.cat_id} */}
                  To cat {productFromAPI.cat_id}
               </Link>
            )}
         </div>
         {!productFromAPI && <p>Loading</p>}
         <div className="min-h-full">
            {productFromAPI && (
               <div className="div flex md:flex-row flex-col gap-6  min-h-full">
                  <div className="left bg-white md:w-6/12 min-h-full flex flex-col">
                     <div className="h-full ">
                        <img
                           className="h-full min-w-full min-h-[220px] border"
                           src=""
                           alt={productFromAPI.title}
                        />
                     </div>

                     <div className="flex justify-between m-4">
                        <div className="price text-2xl font-semibold py-2">
                           € {productFromAPI.price}
                        </div>
                        <div className="price text-2xl font-semibold px-6 py-2 bg-amber-400 hover:bg-sky-600 hover:cursor-pointer hover:text-amber-400">
                           BUY
                        </div>
                     </div>
                  </div>
                  <div className="right w-full border-b-4 border-white flex flex-col gap-4 relative justify-start">
                     <div className="title flex flex-col gap-2 justify-start">
                        <h1 className="text-4xl font-semibold text-stone-700">
                           {productFromAPI.title}
                        </h1>

                        <div className="flex justify-between text-sm">
                           <div className="flex gap-2 items-center">
                              <p
                                 className={`${
                                    productFromAPI.p_condition === 'used'
                                       ? 'bg-amber-400'
                                       : 'bg-lime-400'
                                 } capitalize w-fit px-4 py-1`}
                              >
                                 {productFromAPI.p_condition}
                              </p>
                              <div
                                 className={`${
                                    dateDay > 30
                                       ? 'bg-amber-400'
                                       : 'bg-lime-400'
                                 } px-2 py-1`}
                              >
                                 <span className="font-medium">
                                    {dateDay === 0
                                       ? 'Listed: Today'
                                       : `Listed: ${dateDay} days ago`}
                                 </span>
                              </div>
                              <p className="py-1">
                                 By{' '}
                                 <span className="bg-white ml-1 px-2 font-medium py-1">
                                    {productFromAPI.username}
                                 </span>
                              </p>
                           </div>
                           {/* <div className="wishlist px-4 py-2 hover:text-amber-400 border font-semibold shadow border-amber-400 bg-white hover:cursor-pointer flex items-center gap-2">
                              <div className="text-rose-400">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-heart-fill"
                                    viewBox="0 0 16 16"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                                    />
                                 </svg>
                              </div>
                              <p>Wishlist</p>
                           </div> */}
                        </div>
                     </div>
                     <div className="about justify-end ">
                        <h1 className="font-semibold py-2">
                           Product information from seller
                        </h1>
                        <p className="bg-white p-4 text-sm h-full">
                           {/* {productFromAPI.content} */}
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Molestias error adipisci possimus sequi itaque
                           dolorum eveniet sed doloremque sunt autem culpa ullam
                           repellat provident, laboriosam quibusdam impedit nemo
                           repellendus consequuntur asperiores dolor eum,
                           dolores quo voluptate libero! Mollitia eius soluta
                           molestias rem impedit dolore, sunt saepe laudantium,
                           sequi, voluptatem ipsam?
                        </p>
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="comments mt-8">
            <h1 className="font-semibold py-2">Comments</h1>
            <div className="bg-white p-4">
               <h1>One comment</h1>
               <p>comment content</p>
            </div>
         </div>
      </div>
   );
};
