export const SingleAd = ({ ad }) => {
   return (
      <li className="bg-white text-md p-4 min-w-[260px] max-w-[260px] min-h-[380px] flex flex-1 shadow hover:cursor-pointer">
         <div className="div flex flex-col min-w-full  gap-1 ">
            <div className="flex flex-col  justify-between min-w-full flex-1 h-full">
               <div className="img flex flex-col justify-between  h-full">
                  <img
                     className="border h-full  border-red-200"
                     src=""
                     alt={ad.title}
                  />
                  <p className="h-20 py-3">{ad.title}</p>
               </div>
               <div className="flex justify-between align-middle items-center">
                  <div className="hover:underline">{'[0] like'}</div>
                  <div className="text-xl"> € {ad.price}</div>
               </div>
            </div>
         </div>
      </li>
   );
};
