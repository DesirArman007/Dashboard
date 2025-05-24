
export function Button({items }) {

  return (
    <button className=" group cursor-pointer px-4 py-2 rounded-lg border-[1px] border-purple-600 hover: bg-gradient-to-br hover:from-blue-400 hover:via-purple-500 hover:to-blue-600 ransition-colors duration-300 ease-in-out hover:delay-3000">
      
      <span className="text-gray-600 font-semibold group-hover:text-white ransition-colors duration-300 ease-in-out">
        {items}
      </span>
    </button>
  );
}
