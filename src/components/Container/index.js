import React from "react";

const index = ({ children }) => {
  return (
    <div className="container flex flex-col items-center justify-center min-w-[80%] md:max-w-[700px]">
      {children}
    </div>
  );
};

export default index;
