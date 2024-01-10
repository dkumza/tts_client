export const Sell = () => {
   const newAd = {
      title: 'Edited Post 1',
      author: 'Author 1',
      date: '2022-07-07',
      content: 'Test content',
      cat_id: 1001,
      price: 201,
      sub_id: 4001,
   };

   return (
      <div className="px-4  md:px-20 md:p-8 container mx-auto flex flex-col justify-center items-center h-full">
         <div className="flex w-4/12 min-h-full bg-white px-12 py-14 flex-col">
            <h1 className="mb-4 text-2xl text-center">Sell Item</h1>
            <form className="w-full flex flex-col justify-center items-center ">
               <input
                  required
                  className="w-full px-3 py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  id="title"
                  type="text"
                  placeholder="Title"
                  name="title"
                  autoFocus
               />
               <select className="w-full px-3 py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option className="" disabled selected>
                     Select Category
                  </option>
                  <option className="">Test1</option>
               </select>
               <textarea
                  required
                  className="w-full px-3 py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  id="email"
                  type="email"
                  placeholder="Short about selling item"
                  name="email"
               />
               <input
                  required
                  className=" px-3 self-start py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  id="price"
                  type="number"
                  placeholder="Price"
                  name="price"
               />
               <input
                  required
                  className="w-full px-3 self-start py-2 mb-4 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
                  id="name"
                  type="text"
                  placeholder="Seller Name"
                  name="seller"
               />

               <button
                  type="submit"
                  className="min-w-full py-2 mb-4 text-white font-semibold bg-amber-400  hover:bg-amber-300 w-2/3"
               >
                  Publish
               </button>
            </form>
         </div>
      </div>
   );
};
