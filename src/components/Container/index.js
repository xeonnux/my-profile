import React from "react";

const index = ({ children }) => {
  return (
    <div className="container flex flex-col items-center justify-center md:max-w-[700px]">
      {children}
    </div>
  );
};

export default index;
