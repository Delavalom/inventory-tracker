interface ButtonTypes {
  title: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ title, className, onClick }: ButtonTypes) => {
  return (
    <button
      className={`text-white rounded-lg px-5 py-2 text-lg font-semibold bg-indigo-500 transition-colors duration-500 hover:bg-black hover:outline-indigo-500 focus:outline-indigo-500 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};