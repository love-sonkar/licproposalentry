import { AgenstDetail, AgentsSchema } from "@/schemas";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CardForm from "../CardForm";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Errors from "../ui/Errors";
import { UseContextForm } from "@/useContext/UseContext";
import { useNavigate } from "react-router-dom";

const AgentsDetail: React.FC = () => {
  const navigate = useNavigate();

  const { setData } = UseContextForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgenstDetail>({ resolver: zodResolver(AgentsSchema) });

  const agentSubmit: SubmitHandler<AgenstDetail> = (data) => {
    setData((prev) => ({ ...prev, agentdetail: data }));
    navigate("/plandetail");
  };

  return (
    <form onSubmit={handleSubmit(agentSubmit)}>
      <CardForm title="Agents Detail" description="Please Fill All">
        <div className="flex flex-col gap-3">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="nameagent">Agent Name</Label>
            <Input
              {...register("name")}
              id="nameagent"
              type="text"
              placeholder="Agent Name"
            />
            {<Errors>{errors.name?.message}</Errors>}
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="agentcode">Agent Code</Label>
            <Input
              {...register("code")}
              id="agentcode"
              type="number"
              placeholder="Agent Code"
            />
            {<Errors>{errors.code?.message}</Errors>}
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </CardForm>
    </form>
  );
};

export default AgentsDetail;
