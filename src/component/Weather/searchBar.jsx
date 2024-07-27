import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";

export default function SearchBar({ search, handleSubmit, onFocus }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit} className="pb-5 text-2xl text-white flex">
        <input
          type="text"
          ref={inputRef}
          onFocus={onFocus}
          name="search"
          defaultValue={search}
          placeholder="Search your city..."
          className="border border-gray-300 bg-transparent  px-3 py-1 focus:border-slate-200 rounded-lg focus:outline-none focus:ring focus:ring-gray-400.placeholder-white placeholder-white"
        />
        <MagnifyingGlassIcon className="w-16 ml-2 border border-gray-300 rounded-lg px-3 py-1 cursor-pointer " />
      </form>
    </div>
  );
}
