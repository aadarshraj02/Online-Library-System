import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 items-center justify-between px-8 py-4 bg-zinc-800">
      <h1 className="text-zinc-100 text-xl font-bold tracking-tight">
        Online Library
      </h1>
      <div>
        <ul className="flex items-center gap-8 text-zinc-200">
          <li className="cursor-pointer hover:text-zinc-100 hover:scale-110 transition-all duration-300 ease-linear">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-zinc-100 hover:scale-110 transition-all duration-300 ease-linear">
            <Link to="/books">Browse Books</Link>
          </li>
          <li className="cursor-pointer hover:text-zinc-100 hover:scale-110 transition-all duration-300 ease-linear">
            <Link to="/add-books">Add Books</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
