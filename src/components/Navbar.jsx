import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/Temp";
const Navbar = ({ setSelectedCategory, setIsCheckoutOpen }) => {

  const { cartItems } = useContext(CartContext);

  return (
    <nav className = "flex justify-between items-center px-8 py-4 shadow-md">
        <div className = "flex items-center gap-8">
            <Link to="/">
                <h1 className="text-2xl font-bold">
                    Shopi
                </h1>
            </Link>

        <ul className="flex gap-5">
          <li className="cursor-pointer" onClick={() => setSelectedCategory("All")}>
            All
          </li>
          <li className="cursor-pointer" onClick={() => setSelectedCategory("Clothes")}>
            Clothes
          </li>
          <li className="cursor-pointer" onClick={() => setSelectedCategory("Electronics")}>
            Electronics
          </li>
          <li className="cursor-pointer" onClick={() => setSelectedCategory("Furniture")}>
            Furniture
          </li>
          <li className="cursor-pointer" onClick={() => setSelectedCategory("Toys")}>
            Toys
          </li>
        </ul>

        </div>
        <div className="flex items-center gap-5 text-sm">
            <p className="text-gray-400"> userintheapp@test.com</p>
            <Link to="/orders">
                My Orders
            </Link>
            <Link to="/account">
                My Account
            </Link>
            <div className="flex items-center gap-2 cursor-pointer">
                <Link to="/"  onClick={() => setIsCheckoutOpen(true)}>
                <FaShoppingCart size={20} />
                </Link>
                {cartItems.length > 0 && (
                    <span className=" text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartItems.length}
                    </span>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar