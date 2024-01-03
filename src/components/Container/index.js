import React from "react";

const index = ({ children }) => {
  return (
    <div className="container flex flex-col items-center justify-center max-w-[80%] md:max-w-[700px] mb-8">
      {children}
    </div>
  );
};

export default index;
