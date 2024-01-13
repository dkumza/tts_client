import { useState } from 'react';

const Search = () => {
   const [isFocused, setIsFocused] = useState(false);

   return (
      <div
         className={`border-2 md:w-2/6 flex justify-between items-center ${
            isFocused ? 'border-lime-400' : 'border-amber-400'
         }`}
      >
         <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="focus:outline-none w-full px-3 py-2"
            type="text"
            placeholder="Search"
         />
         <div className="border px-4 py-1 mr-1 bg-amber-400 hover:cursor-pointer hover:bg-sky-700 hover:text-amber-400">
            Search
         </div>
      </div>
   );
};

export default Search;
