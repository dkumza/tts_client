export const SingleAd = ({ ad }) => {
   return (
      <li className="border p-4">
         <div className="div">
            <h1>{ad.title}</h1>
         </div>
      </li>
   );
};
