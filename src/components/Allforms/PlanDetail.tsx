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
    setData((prev) => ({ ...prev, plan: { ...data, plandata, mode } }));
    navigate("/detailspage");
  };

  const [plandata, setPlanData] = useState<string>("Jeevan Kiran 870");
  const [mode, setMode] = useState<string>("Yearly");

  const handle = (e: string) => {
    setPlanData(e);
  };

  return (
    <form onSubmit={handleSubmit(plansubmit)}>
      <CardForm title="Plan Detail" description="Please Fill All">
        <div className="flex flex-col gap-3">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="Plannumber">Plan Number</Label>
            <Select onValueChange={handle}>
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
            <Label htmlFor="term">Term </Label>
            <Input
              {...register("term")}
              id="term"
              type="tel"
              maxLength={5}
              placeholder="Term "
            />
            <Errors>{errors?.term?.message}</Errors>
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="sumassaurd">Sum Assaurd</Label>
            <Input
              {...register("sumassuard")}
              id="sumassaurd"
              type="tel"
              placeholder="Sum Assurd"
            />
            <Errors>{errors?.sumassuard?.message}</Errors>
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="paymentmode">Payment Mode</Label>
            <Select onValueChange={(e: string) => setMode(e)}>
              <SelectTrigger>
                <SelectValue placeholder={mode} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{mode}</SelectLabel>
                  <SelectItem value="Halfyearly">Halfyearly</SelectItem>
                  <SelectItem value="Quarterly">Quarterly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit">Submit</Button>
        </div>
      </CardForm>
    </form>
  );
};

export default PlanDetail;
