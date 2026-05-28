import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import { IoClose } from "react-icons/io5";

const CheckoutSideMenu = ({isOpen,CloseSidebar}) => {
    const {cartItems , removeFromCart, totalPrice} = useContext(CartContext)
    console.log(totalPrice);
    if(!isOpen) return null
  return (
    <div className = "fixed top-0 right-0 w-[360px] h-screen bg-white shadow-2xl p-5 overflow-y-auto z-50">
        <div className = "flex justify-between items-center p-6">
            <h1 className="text-2xl font-bold">My Orders</h1>
            <button onClick={CloseSidebar}>
                <IoClose size ={25} />
            </button>
        </div>
        <div>
            {cartItems.map((item)=>(
                <div key={item.id} className ="flex gap-2 mb-4 ">
                <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                    <h2 className="text-sm font-medium">{item.title}</h2>
                    <p className="text-sm font-bold">${item.price}</p>
                </div>
                <button onClick={(e) => {
                   e.stopPropagation();
                    removeFromCart(item.id);
              
                }} 
                 className="text-xl font-bold">
                    <IoClose size={20} />
                </button>
            </div>       
            ))}
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-xl font-bold">
          <p>Total</p>
        <p>${totalPrice}</p>
         </div>
        </div>
    </div>
  )
}

export default CheckoutSideMenu