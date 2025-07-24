import React from "react";

export const Icon = ({ imp: IconComponent, title, color }) => {
  return (
    <IconComponent
      title={title}
      className={`${color} shadow-xl hover:shadow-2xl transform hover:scale-115 transition-all duration-300 ease-in-out`}
    />
  );
};
