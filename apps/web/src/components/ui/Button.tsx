import { ReactNode } from "react";

interface ButtonTypes {
  title?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode
}

export const Button = ({ title, className, onClick, children }: ButtonTypes) => {
  return (
    <button
      className={`text-white rounded-lg flex flex-row-reverse items-center justify-center px-3 py-1 sm::px-5 sm:py-2 text-lg font-semibold bg-indigo-500 transition-colors duration-500 hover:bg-indigo-900 ${className}`}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};
