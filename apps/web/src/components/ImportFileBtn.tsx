interface Props {}

export const ImportFileBtn = () => {
  return (
    <form className="flex items-center space-x-6 rounded-full box-content hover:bg-indigo-900 transition-colors duration-500">
      <label className="block">
        <span className="sr-only">Choose file</span>
        <input type="file" className="ImportBtn" />
      </label>
    </form>
  );
};
