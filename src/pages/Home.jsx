import { useEffect } from "react"
import { useState } from "react"
import ProductCard from "../components/ProductCard"
import ProductDetails from "../components/ProductDetails";

import api from "../api/api"
import Navbar from "../components/Navbar";

const Home = ({ selectedCategory, setIsCheckoutOpen }) => {

    const [products,setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const [search, setSearch] = useState("");
    useEffect(()=>{
        fetchProducts()
    },[])

    const fetchProducts = async()=>{
        try{
            const res = await api.get("/products")
            setProducts(res.data)
        }catch(err){
            console.log(err)
        }
    }

    const filteredProducts = products.filter ((product) => {
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category?.name === selectedCategory;
        return matchesSearch && matchesCategory;
        })


  return (
    <div className=" max-w-6xl mx-auto p-6">
      
        <h1 className="text-3xl font-bold text-center mb-6">Home</h1>

        <div className="flex justify-center mb-10">
            <input type="text" 
            placeholder="Search a product"
            className="border border-gray-400 px-4 py-3 rounded-lg w-full max-w-md outline-none"
             onChange={(e) => setSearch(e.target.value)}
            />
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
  key={product.id}
  product={product}
  onClick={() => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  }}
  onAddToCart={() => setIsCheckoutOpen(true)}
/>
      ))}
    </div>
        <ProductDetails
  product={selectedProduct}
  isOpen={isProductDetailOpen}
  closeSidebar={() =>
    setIsProductDetailOpen(false)
  }
/>


    </div>
  )
}

export default Home