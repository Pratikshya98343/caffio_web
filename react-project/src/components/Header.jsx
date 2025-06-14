import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <nav className="w-full bg-[#271001] text-white p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="image/logo.png" alt="Logo" className="w-20 h-20 rounded-full" />
      </div>

      <ul className="flex space-x-6 font-medium">
  <li><Link to="/" className="text-white hover:text-slate-200 transition-colors">Home</Link></li>
  <li><Link to="/about" className="text-white hover:text-slate-200 transition-colors">About</Link></li>
  <li><Link to="/menu" className="text-white hover:text-slate-200 transition-colors">Menu</Link></li>
  <li><Link to="/product" className="text-white hover:text-slate-200 transition-colors">Product</Link></li>
  <li><Link to="/gallery" className="text-white hover:text-slate-200 transition-colors">Gallery</Link></li>
  <li><Link to="/contact" className="text-white hover:text-slate-200 transition-colors">Contact</Link></li>
</ul>
      <div className="flex space-x-6 pr-4">
        <Link to="/signin" className=" flex items-center space-x-1 hover:text-slate-200 transition-colors">
          <FiUser size={28} /> 
        </Link>
        <FiShoppingCart size={28} className="ml-4" /> 
      </div>
    </nav>
  );
};

export default Header;
