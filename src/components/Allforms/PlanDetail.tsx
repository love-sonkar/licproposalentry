import React, { useState } from "react";
import CardForm from "../CardForm";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm, SubmitHandler } from "react-hook-form";

import { UseContextForm } from "@/useContext/UseContext";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import { PlanNumber } from "@/utils";
import { TplanDetail, PlanSchema } from "@/schemas";
import Errors from "../ui/Errors";

const PlanDetail: React.FC = () => {
  const { setData } = UseContextForm();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TplanDetail>({
    resolver: zodResolver(PlanSchema),
  });

  const plansubmit: SubmitHandler<TplanDetail> = (data) => {
    setData((prev) => ({ ...prev, plan: { ...data, plandata } }));
    navigate("/detailspage");
  };

  const [plandata, setPlanData] = useState<string>("Jeevan Kiran 870");

  const handle = (e: string) => {
    setPlanData(e);
  };

  return (
    <form onSubmit={handleSubmit(plansubmit)}>
      <CardForm title="Plan Detail" description="Please Fill All">
        <div className="flex flex-col gap-3">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="Plannumber">Plan Number</Label>
            <Select value={plandata} onValueChange={handle}>
              <SelectTrigger>
                <SelectValue placeholder={plandata} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{plandata}</SelectLabel>
                  {PlanNumber.map((item) => (
                    <SelectItem key={item.id} value={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="agentcode">Term </Label>
            <Input
              {...register("term")}
              id="agentcode"
              type="string"
              placeholder="Term "
            />
            <Errors>{errors?.term?.message}</Errors>
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="agentcode">Sum Assaurd</Label>
            <Input
              {...register("sumassuard")}
              type="string"
              placeholder="Sum Assurd"
            />
            <Errors>{errors?.sumassuard?.message}</Errors>
          </div>

          <Button type="submit">Submit</Button>
        </div>
      </CardForm>
    </form>
  );
};

export default PlanDetail;
