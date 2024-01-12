import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

   return (
      <div className="container mx-auto min-h-full my-8">
         <div className="py-2  flex align-middle items-center gap-1">
            <p className=" hover:cursor-pointer text-gray-500 hover:text-black">
               All Products /
            </p>
            {productFromAPI && (
               <p className=" hover:cursor-pointer text-gray-500 hover:text-black">
                  {/* {productFromAPI.cat_id} */}
                  Desktop PCs
               </p>
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
                        <div className="price text-2xl font-semibold px-6 py-2 bg-amber-400">
                           BUY
                        </div>
                     </div>
                  </div>
                  <div className="right w-full border-b-4 border-white flex flex-col gap-4 relative">
                     <div className="title flex flex-col gap-2 justify-start">
                        <h1 className="text-4xl font-semibold text-stone-700">
                           {productFromAPI.title}
                        </h1>

                        <div className="flex gap-2 text-sm">
                           <div className="bg-amber-400 px-2">
                              Listed:{' '}
                              <span className=" font-medium">
                                 {Math.floor(
                                    (new Date() -
                                       new Date(productFromAPI.date)) /
                                       (1000 * 60 * 60 * 24)
                                 )}{' '}
                                 days ago
                              </span>
                           </div>
                           <p className="">
                              By{' '}
                              <span className="bg-white ml-1 px-2 font-medium">
                                 {productFromAPI.username}
                              </span>
                           </p>
                        </div>
                     </div>
                     <div className="about justify-end ">
                        <h1 className="font-semibold py-2">
                           Product information from seller
                        </h1>
                        <p className="bg-white p-4 text-sm">
                           {productFromAPI.content}
                        </p>
                     </div>
                     <div className="absolute bottom-0 right-0 flex w-full justify-between py-4">
                        <div className="wishlist px-4 py-1 text-amber-400 font-semibold bg-sky-700 hover:bg-sky-600 hover:cursor-pointer flex items-center gap-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart"
                              viewBox="0 0 16 16"
                           >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                           </svg>
                           <p>Wishlist</p>
                        </div>
                        <div className="div flex gap-4">
                           <p
                              className={`${
                                 productFromAPI.p_condition === 'used'
                                    ? 'bg-amber-400'
                                    : 'bg-lime-500'
                              } capitalize w-fit px-4 py-1`}
                           >
                              {productFromAPI.p_condition}
                           </p>
                           <p className="px-4 py-1 text-amber-400 font-semibold bg-sky-700 hover:bg-sky-600 hover:cursor-pointer">
                              Desktop PCs
                           </p>
                        </div>
                     </div>
                     {/* <div className="comments ">
                        <h1 className="font-semibold py-2">Comments</h1>
                        <div className="bg-white p-4">
                           <h1>One comment</h1>
                           <p>comment content</p>
                        </div>
                     </div> */}
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
