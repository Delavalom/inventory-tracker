import Button from "./ui/Button";

interface Props {}

const Routes = [
    'Dashboard',
    'Import',
    'Export',
    'Settings',
]

export const Header = () => {

  return (
        <header className="w-full h-40 flex items-center justify-center">
          <nav className="w-10/12 max-w-5xl h-16 bg-indigo-500 rounded-full px-10 flex justify-between items-center">
            <h1 className="text-2xl tracking-widest font-black">Inventory Tracker</h1>
            <ul className="flex justify-around flex-1 px-4">
                {Routes.map(route => (
                    <li className="font-semibold rounded-full px-4 py-1 hover:bg-indigo-900 transition-colors duration-500" key={route}>
                        <a href="/">{route}</a>
                    </li>
                ))}
            </ul>
            <Button className="text-indigo-900 bg-white hover:bg-indigo-900 hover:text-white" title="Login" />
          </nav>
        </header>
  );
};
