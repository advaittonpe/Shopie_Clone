import React from 'react'
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">My Orders</h1>
         <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="empty orders"
        className="w-40 mb-6"
      />
        <p className="text-gray-500 mt-2">You have no orders yet.</p>
        <Link to="/" className="text-blue-500 mt-4 inline-block">
            Start Shopping
        </Link>
    </div>
  )
}

export default Orders