import { FaFilter } from "react-icons/fa";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";

export default function ListSection() {
  return (
    <div className="space-y-6 text-sm">
      {/* Applied Filters */}
      <div className="border-b pb-2">
        <div className="flex items-center gap-2 mb-4 border-b pb-2">
          <FaFilter className="text-md" />
          <p className="text-xl text-textColor textSpacing">Filters</p>
        </div>
        <div className="flex items-center justify-between font-medium ">
          <span>Applied Filters</span>
          <a href="#" className="text-xs text-gray-500 hover:underline">
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

      {/* Category */}
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

      {/* Stock Status */}
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

      {/* Size */}
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

      {/* Color */}
      <div>
        <div className="font-medium mb-2 flex items-center justify-between">
          Color <IoIosArrowUp className="cursor-pointer" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="w-6 h-6 rounded-full border bg-red-600"></span>
          <span className="w-6 h-6 rounded-full border bg-green-500"></span>
          <span className="w-6 h-6 rounded-full border bg-blue-600"></span>
          <span className="w-6 h-6 rounded-full border bg-fuchsia-500"></span>
          <span className="w-6 h-6 rounded-full border bg-cyan-400"></span>
          <span className="w-6 h-6 rounded-full border bg-orange-600"></span>
          <span className="w-6 h-6 rounded-full border bg-black"></span>
          <span className="w-6 h-6 rounded-full border bg-gray-500"></span>
        </div>
      </div>
    </div>
  );
}
