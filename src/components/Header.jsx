import { IoClose } from "react-icons/io5";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="py-4">
        <div className="flex flex-wrap sm:flex-nowrap items-stretch gap-3 sm:gap-2">
          <div className="flex items-center flex-grow bg-gray-100 rounded px-2 py-2 min-w-[250px]">
            <div className="flex items-center px-2 border-r border-gray-300">
              <select className="bg-transparent text-sm md:text-lg focus:outline-none text-textColor">
                <option>Shoes</option>
                <option>Clothes</option>
                <option>Accessories</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="running shoes"
              className="flex-1 px-2 text-sm bg-transparent focus:outline-none text-textColor"
            />
            <div className="flex items-center gap-2 border-l border-gray-300 pl-2">
              <button className="text-gray-600 hover:text-black text-[22px] md:text-[30px]">
                <IoClose />
              </button>
              <button className="text-gray-600 hover:text-black text-sm md:text-lg ">
                <FaSearch />
              </button>
            </div>
          </div>
          <button className="w-full sm:w-auto md:w-[150px] md:text-lg flex items-center justify-center gap-1 px-2 py-2 text-sm font-medium text-textColor bg-yellow-300 rounded hover:bg-yellow-500">
            <FaCartArrowDown className="text-[20px]" /> View Cart
          </button>
        </div>
      </nav>
    </>
  );
}
