import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Ultraboost Light Running Shoes",
      category: "Running Shoes",
      image: "shoe01.jpg",
      rating: 5.0,
      reviews: 10,
      stock: true,
      price: 200,
    },
    {
      id: 2,
      title: "Nike Air Zoom Pegasus 39",
      category: "Running Shoes",
      image: "shoe02.jpg",
      rating: 4.8,
      reviews: 24,
      stock: false,
      price: 150,
    },
    {
      id: 3,
      title: "ASICS Gel-Kayano 29",
      category: "Stability Shoes",
      image: "shoe03.jpg",
      rating: 4.6,
      reviews: 18,
      stock: false,
      price: 180,
    },
    {
      id: 4,
      title: "Brooks Ghost 15",
      category: "Neutral Shoes",
      image: "shoe04.jpg",
      rating: 4.9,
      reviews: 35,
      stock: true,
      price: 140,
    },
    {
      id: 5,
      title: "Hoka One One Clifton 9",
      category: "Cushioning Shoes",
      image: "shoe05.jpg",
      rating: 4.7,
      reviews: 21,
      stock: false,
      price: 160,
    },
    {
      id: 6,
      title: "New Balance Fresh Foam 1080v12",
      category: "Daily Trainer",
      image: "shoe02.jpg",
      rating: 4.5,
      reviews: 13,
      stock: true,
      price: 170,
    },
    {
      id: 7,
      title: "Saucony Endorphin Speed 3",
      category: "Speed Shoes",
      image: "shoe03.jpg",
      rating: 4.8,
      reviews: 30,
      stock: false,
      price: 190,
    },
    {
      id: 8,
      title: "Nike React Infinity Run Flyknit",
      category: "Running Shoes",
      image: "shoe02.jpg",
      rating: 4.6,
      reviews: 19,
      stock: false,
      price: 160,
    },
    {
      id: 9,
      title: "Adidas Adizero Adios Pro 3",
      category: "Racing Shoes",
      image: "shoe01.jpg",
      rating: 4.9,
      reviews: 11,
      stock: true,
      price: 250,
    },
    {
      id: 10,
      title: "On Cloudswift 3",
      category: "Urban Running",
      image: "shoe01.jpg",
      rating: 4.4,
      reviews: 15,
      stock: false,
      price: 180,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">“Running Shoes”</h1>
        <div className="text-sm text-gray-500">288 Results</div>
      </div>

      <div className="flex justify-end">
        <div className="relative">
          <button className="border px-4 py-2 rounded flex items-center gap-2">
            <span>Sort by</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border shadow z-10">
            <ul className="text-sm">
              <li className="px-4 py-2 hover:bg-gray-100">
                Alphabetically, A to Z
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Alphabetically, Z to A
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Price, Low to High
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                Price, High to Low
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">Popularity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProductCard products={products} />
      </div>
    </div>
  );
}
