import { FaFilter } from "react-icons/fa";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

export default function ListSection() {
  return (
    <section className="space-y-6 text-sm">
      <div className="border-b pb-2">
        <div className="flex items-center gap-2 mb-4 border-b pb-2">
          <FaFilter className="text-md" />
          <p className="text-xl text-textColor textSpacing">Filters</p>
        </div>
        <div className="flex items-center justify-between font-medium ">
          <span>Applied Filters</span>
          <a href="#" className="text-xs text-gray-500 underline">
            clear all
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
            Running Shoes
            <span className="ml-1 cursor-pointer text-gray-600">
              <IoMdClose />
            </span>
          </span>
          <span className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
            Red
            <span className="ml-1 cursor-pointer text-gray-600">
              <IoMdClose />
            </span>
          </span>
        </div>
      </div>
      <div className="border-b pb-2">
        <div className="font-medium mb-2 flex items-center justify-between">
          Category <IoIosArrowUp className="cursor-pointer" />
        </div>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            All
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-black" />
            Running Shoes
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            Category 3
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            Category 4
          </label>
        </div>
      </div>
      <div className="border-b pb-2">
        <div className="font-medium mb-2 flex items-center justify-between">
          Stock Status <IoIosArrowUp className="cursor-pointer" />
        </div>
        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            In Stock
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            Out of Stock
          </label>
        </div>
      </div>
      <div className="border-b pb-2">
        <div className="font-medium mb-2 flex justify-between items-center">
          Size <IoIosArrowUp className="cursor-pointer" />
        </div>
        <div className="flex flex-wrap gap-2">
          {[7, 8, 9, 10].map((size) => (
            <span
              key={size}
              className="inline-block bg-gray-100 px-3 py-1 rounded text-sm"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="font-medium mb-2 flex items-center justify-between">
          Color <IoIosArrowUp className="cursor-pointer" />
        </div>
        <div className="flex flex-wrap gap-2">
          <FaCircle className="w-6 h-6 cursor-pointer text-red-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-blue-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-green-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-orange-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-gray-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-purple-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-yellow-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-green-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-blue-600" />
          <FaCircle className="w-6 h-6 cursor-pointer text-gray-600" />
        </div>
      </div>
    </section>
  );
}
