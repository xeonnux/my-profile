import React from "react";

const index = (props) => {
  const { title, description, image, date } = props;

  return (
    <div className="flex flex-col items-center bg-white border-gray-200 dark:border-gray-300 border-dashed p-5 border-y-[1.25px] md:flex-row md:max-w-full hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
      <img
        className="object-cover w-full min-h-64 md:h-full md:w-48"
        src={image}
        alt={`${title}`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="text-xs font-medium text-gray-900 dark:text-gray-100">
          {date}
        </p>
      </div>
    </div>
  );
};

export default index;
