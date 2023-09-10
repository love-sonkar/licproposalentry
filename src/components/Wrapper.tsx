import { ChildrenProps } from "@/schemas";
import React from "react";

const Wrapper: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default Wrapper;
