import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar({ search, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="pb-5 text-2xl text-white flex">
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search..."
          className="border border-gray-300 bg-transparent  px-3 py-1 focus:border-slate-200 rounded-lg focus:"
        />
        <MagnifyingGlassIcon className="w-16 ml-2 border border-gray-300 rounded-lg px-3 py-1 cursor-pointer hover:border-gray-500 hover:text-gray-500" />
      </form>
    </div>
  );
}
