import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CardForm from "../CardForm";
import { Button } from "../ui/button";
import Errors from "../ui/Errors";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { DatePickerDemo } from "../ui/datepicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerSchema, TCustomerDetail } from "@/schemas";
import { UseContextForm } from "@/useContext/UseContext";

const CustomerDetail: React.FC = () => {
  const navigate = useNavigate();

  const [Dob, setDob] = useState<Date>();
  const { setData } = UseContextForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCustomerDetail>({ resolver: zodResolver(CustomerSchema) });

  const submitfunction: SubmitHandler<TCustomerDetail> = (data) => {
    const dateconvert = Dob?.toLocaleDateString();
    setData((prev) => ({ ...prev, customer: { ...data, Dob: dateconvert } }));
    navigate("/plandetail");
  };

  return (
    <form onSubmit={handleSubmit(submitfunction)}>
      <CardForm title="Customer Detail" description="Please Fill All">
        <div className="flex flex-col gap-3">
          <div className="grid w-full  items-center gap-1.5">
            <DatePickerDemo setDob={setDob} />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className="text-xl " htmlFor="customer">
              Customer Name
            </Label>
            <Input
              {...register("cname")}
              id="customer"
              type="text"
              placeholder="Customer Name"
            />
            <Errors>{errors?.cname?.message}</Errors>
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className="text-xl " htmlFor="fname">
              Fathers Name / Mothers name
            </Label>
            <Input
              {...register("fname")}
              id="fname"
              type="text"
              placeholder="Fathers Name / Mothers name"
            />
            <Errors>{errors?.fname?.message}</Errors>
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className="text-xl " htmlFor="address">
              Address
            </Label>
            <Textarea
              {...register("address")}
              id="address"
              placeholder="Address..."
              className="resize-none scroll-m-0"
            />
            <Errors>{errors?.address?.message}</Errors>
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className="text-xl " htmlFor="aadhar">
              Aadhar
            </Label>
            <Input
              {...register("aadhar")}
              id="aadhar"
              type="tel"
              maxLength={4}
              placeholder="Aadhar Last 4 Digit"
            />
            <Errors>{errors?.aadhar?.message}</Errors>
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label className="text-xl " htmlFor="number">
              Phone number
            </Label>
            <Input
              {...register("number")}
              id="number"
              type="tel"
              maxLength={10}
              placeholder="Phone number"
            />
            <Errors>{errors?.number?.message}</Errors>
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </CardForm>
    </form>
  );
};

export default CustomerDetail;
