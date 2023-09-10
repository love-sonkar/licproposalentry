import { UseContextForm } from "@/useContext/UseContext";
import React from "react";
import WrapperData from "./WrapperData";

const PlanData: React.FC = () => {
  const {
    data: { plan },
  } = UseContextForm();

  return (
    <WrapperData>
      <h2>Plan Number : {plan?.term}</h2>
    </WrapperData>
  );
};

export default PlanData;
