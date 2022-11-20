import { ThemeBtn } from "./ThemeBtn";
import { Button } from "./ui/Button";

interface Props {}

const Routes = ["Dashboard", "Import", "Export", "Settings"];

export const Header = () => {
  return (
    <header className="w-full h-40 flex items-center justify-center">
      <nav className="w-full max-w-5xl h-16 bg-indigo-500 rounded-full px-10 flex justify-between items-center overflow-x-auto overscroll-contain snap-x">
        <ul className="flex justify-around flex-1 px-4 max-w-2xl">
          {Routes.map((route) => (
            <li
              className="font-semibold rounded-full px-4 py-1 hover:bg-indigo-900 transition-colors duration-500 snap-center"
              key={route}
            >
              <a href="/">{route}</a>
            </li>
          ))}
        </ul>
        <ThemeBtn />
        <Button
          className="bg-indigo-900  hover:bg-slate-900 hover:text-white snap center"
          title="Login"
        />
      </nav>
    </header>
  );
};
