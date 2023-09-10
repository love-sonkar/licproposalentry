import React from "react";
import { UseContextForm } from "@/useContext/UseContext";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import WrapperData from "./WrapperData";

const AgentData: React.FC = () => {
  const {
    data: { agentdetail },
  } = UseContextForm();

  const CapitalizeFirstLetter = agentdetail?.name.charAt(0).toUpperCase();

  return (
    <WrapperData>
      <h1 className="text-xl mb-3 font-semibold">Agent Details</h1>
      <div className="flex gap-2 items-center ">
        <Avatar className="h-16 w-16 text-2xl">
          <AvatarFallback>{CapitalizeFirstLetter}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h2 className="capitalize">
            Name : <strong>{agentdetail?.name}</strong>
          </h2>
          <h1>
            Code : <strong>{agentdetail?.code}</strong>
          </h1>
        </div>
      </div>
    </WrapperData>
  );
};

export default AgentData;
