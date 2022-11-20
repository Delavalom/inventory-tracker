interface Props {}

export const ImportFileBtn = () => {
  return (
    <form className="flex items-center space-x-6">
      <label className="block">
        <span className="sr-only">Choose file</span>
        <input
          type="file"
          className="w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-indigo-50 hover:file:bg-black transition-colors duration-500"
        />
      </label>
    </form>
  );
};
