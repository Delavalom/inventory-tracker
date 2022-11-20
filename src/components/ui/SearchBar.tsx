interface Props {}

export const SearchBar = () => {
  return (
    <input
      type="search"
      className="w-4/12 focus:w-11/12 transition-all duration-500 max-w-sm placeholder:italic placeholder:text-slate-500 dark:placeholder:text-slate-300 text-slate-900 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 outline outline-1 outline-indigo-500 px-4 py-2 rounded-full snap-center"
      placeholder="Search for anything..."
    />
  );
};
