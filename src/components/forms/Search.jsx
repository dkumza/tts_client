const Search = () => {
   return (
      <div className="border-b md:w-[420px] flex justify-between items-center border-b-amber-400 absolute left-1/2 transform -translate-x-1/2">
         <input
            className="focus:outline-none w-full px-3"
            type="text"
            placeholder="Search for product"
         />
         <div className="border px-4 py-1 bg-amber-400 hover:cursor-pointer hover:bg-sky-700 hover:text-amber-400">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="18"
               height="18"
               fill="currentColor"
               className="bi bi-search"
               viewBox="0 0 16 16"
            >
               <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
         </div>
      </div>
   );
};

export default Search;
