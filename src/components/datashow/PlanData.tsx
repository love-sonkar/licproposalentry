import { UseContextForm } from "@/useContext/UseContext";
import React from "react";
import WrapperData from "./WrapperData";

const PlanData: React.FC = () => {
  const {
    data: { plan },
  } = UseContextForm();

  return (
    <WrapperData>
      <h1 className="text-2xl font-semibold mb-4">Plan Detail's</h1>
      <h2>
        Plan : <strong>{plan?.plandata}</strong>
      </h2>
      <h2>
        Plan Term : <strong>{plan?.term}</strong>
      </h2>
      <h2>
        Plan SumAssaurd : <strong>{plan?.sumassuard}</strong>
      </h2>
      <h2>
        Payment Mode : <strong>{plan?.mode}</strong>
      </h2>
    </WrapperData>
  );
};

export default PlanData;
