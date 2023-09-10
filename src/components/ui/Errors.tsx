import { ChildrenProps } from "@/schemas";
import React from "react";

const Errors: React.FC<ChildrenProps> = ({ children }) => {
  return <p className="text-red-500">{children}</p>;
};

export default Errors;
