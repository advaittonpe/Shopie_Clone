import React from 'react'
import { IoClose } from "react-icons/io5";
const ProductDetails = ({ product, isOpen, closeSidebar }) => {
     if (!isOpen || !product) return null;
  return (
    <div className="fixed top-0 right-0 w-90 h-screen bg-white shadow-2xl p-6 overflow-y-auto z-50">
        <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-medium">Details</h2>
            <button className='cursor-pointer' onClick={() => {closeSidebar()}}>
            <IoClose size={24} />
        </button>
        </div>
         <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-72 object-cover rounded-xl"
        />
        <div className="mt-4">
            <h3 className="text-xl font-bold">{product.title}</h3>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
    </div>
  )
}

export default ProductDetails       