import React from "react";

export default props => (
  <div className="relative w-full rounded shadow-lg bg-white">
    {props.title && (
      <p className="text-base font-bold px-4 py-3 hr m-0">{props.title}</p>
    )}
    {props.action && (
      <div className="absolute top-0 right-0">{props.action}</div>
    )}
    <div className={`flex flex-col items-center`}>{props.children}</div>
  </div>
);
