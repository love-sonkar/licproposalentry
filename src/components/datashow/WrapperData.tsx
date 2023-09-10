import { ChildrenProps } from "@/schemas";
import React from "react";

const WrapperData: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="py-4 border border-blue-500 px-2 shadow-lg rounded">
      {children}
    </div>
  );
};

export default WrapperData;
