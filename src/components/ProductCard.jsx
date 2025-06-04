import { FaHeart } from "react-icons/fa";
export default function ProductCard({ products }) {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-xs bg-white rounded-lg shadow p-4 flex flex-col justify-between transition-all duration-500 hover:shadow-lg hover:scale-105"
        >
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto rounded mb-4"
            />

            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm italic text-gray-500">{product.category}</p>
            </div>

            <div className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center gap-1 text-yellow-500">
                <span>⭐</span>
                <span className="text-gray-800 font-medium">
                  {product.rating}
                </span>
                <span className="text-gray-500">({product.reviews} rws)</span>
              </div>
              {product.stock ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>

            <div className="text-lg font-bold text-gray-900 mb-4">
              {product.price}
            </div>
          </div>

          <div className="flex gap-2 mt-auto">
            <button className="flex-1 bg-gray-900 text-white py-2 rounded text-sm font-medium hover:bg-gray-800">
              + Add To Cart
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
              <FaHeart />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
