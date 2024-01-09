export const SingleAd = ({ ad }) => {
   return (
      <li className=" p-4 bg-white min-w-[260px] max-w-[260px] min-h-[380px] flex flex-1 shadow-md hover:cursor-pointer">
         <div className="div flex flex-col min-w-full  gap-1 border">
            <div className="flex justify-between">
               <h1 className="border ">{ad.title}</h1>
               <div>0 likes</div>
            </div>
            <div className="flex flex-col  justify-between min-w-full flex-1 h-full">
               <div className="img flex flex-col justify-between border h-full border-red-500">
                  <img className="border h-full" src="" alt={ad.title} />
                  <p className="h-20">{ad.content}</p>
               </div>
               <div className="flex justify-between ">
                  <div className="hover:underline">{ad.author}</div>
                  <div className=""> € {ad.price}</div>
               </div>
            </div>
         </div>
      </li>
   );
};
