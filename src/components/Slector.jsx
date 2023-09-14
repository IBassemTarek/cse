import React from 'react';

function Selector({ options = ['مسلم', 'مسلم', 'مسلم'], title = 'الديانة' }) {
  return (
    <div className="flex flex-col space-y-2 items-end w-[100%]">
      <p className="text-sm font-bold text-[#6F7482]">{title}</p>
      <div className="relative inline-flex h-[40px] w-[100%]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-black">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10.293 14.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L10 11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3z" />
          </svg>
        </div>
        <select
          className="block appearance-none w-full px-4 py-2 
        rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right
        focus:outline-none
        leading-tight"
        >
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Selector;
