import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product ,onClick,   onAddToCart})  {
     const { addToCart } = useContext(CartContext);
  return (
    <div className="cursor-pointer" onClick={onClick}>
     
      <div className="relative">
        
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-56 rounded-xl object-cover"
        />

        <span className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm">
          {product.category?.name}
        </span>

        <button onClick={(e) => {
          e.stopPropagation();
          onAddToCart();
          addToCart(product);
        }} 
        className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center">
          <FaPlus size={12} />
        </button>
      </div>

      <div className="flex justify-between items-start mt-2">
        
        <h2 className="text-sm font-light w-[70%] leading-5">
          {product.title}
        </h2>

        <p className="text-2xl font-bold">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;