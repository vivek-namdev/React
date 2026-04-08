import React from 'react'

const Card = ({ name, image, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">

      {/* Product Image */}
      <div className="h-40 flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-sm font-semibold text-gray-700 line-clamp-2">
          {name}
        </h2>

        <p className="text-lg font-bold text-green-600 mt-2">
          ₹ {price}
        </p>

        <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Add to Cart
        </button>
        
      </div>

    </div>
  )
}

export default Card