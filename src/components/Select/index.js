import React from "react";

export default ({ className, children, ...props }) => {
  return (
    <div className="relative cursor-pointer">
      <select
        className={`${className} block appearance-none w-full rounded leading-tight
          py-2 pl-2 pr-8
          bg-white text-gray-700
          border-2 border-gray-200 
          focus:outline-none focus:bg-white focus:border-gray-200
        `}
        {...props}
      >
        {children}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <i class="fas fa-chevron-down fa-xs" />
      </div>
    </div>
  );
};
