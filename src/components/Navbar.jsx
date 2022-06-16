import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-700 w-full h-16 flex items-center justify-between ">
      <div className="p-5">
        <NavLink className="text-white font-bold text-xl" to={"/"}> LAUTA </NavLink>
      </div>
      <div className="flex gap-5 p-5 ">
        <NavLink
          to="/"
          className="text-white border rounded-xl p-1 hover:bg-blue-800 transition-colors duration-150"
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className="text-white border rounded-xl p-1 hover:bg-blue-800 transition-colors duration-150"
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className="text-white border rounded-xl p-1 hover:bg-blue-800 transition-colors duration-150"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white border rounded-xl p-1 hover:bg-blue-800 transition-colors duration-150"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
