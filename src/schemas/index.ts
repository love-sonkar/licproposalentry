import React from "react";
import { z } from "zod";

const NumberRegex = new RegExp(/[0-9][0-9]+$/);
const refineNumber = /^[0-9][0-9]+$/;

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AgenstDetail = {
  name: string;
  code: string;
};

export const AgentsSchema: z.ZodType<AgenstDetail> = z.object({
  name: z.string().trim().min(1, { message: "please Enter Name" }),
  code: z
    .string()
    .trim()
    .min(4, { message: "Please enter proper code" })
    .regex(NumberRegex, { message: "Not a valid Agent Code" })
    .refine((value) => refineNumber.test(value), {
      message: "Please Provide Number Only",
    }),
});

export type TplanDetail = {
  term: string;
  sumassuard: string;
  mode?: string;
  plandata?: string;
};

export const PlanSchema: z.ZodType<TplanDetail> = z.object({
  term: z
    .string()
    .trim()
    .min(2, { message: "Please enter Term" })
    .regex(NumberRegex, { message: "Not a valid term" })
    .refine((value) => refineNumber.test(value), {
      message: "Please Provide Number Only",
    }),
  sumassuard: z
    .string()
    .trim()
    .min(4, { message: "Please enter Sum assaurd" })
    .regex(NumberRegex, { message: "Not a SumAssaurd term" })
    .refine((value) => refineNumber.test(value), {
      message: "Please Provide Number Only",
    }),
});

export type TCustomerDetail = {
  cname: string;
  fname: string;
  address: string;
  aadhar: string;
  number: string;
  email?: string | null;
};

export const CustomerSchema: z.ZodType<TCustomerDetail> = z.object({
  cname: z.string().trim().min(3, { message: "Minimum 3 charecter" }),
  fname: z.string().trim().min(3, { message: "minimum 3 charecter" }),
  address: z.string().trim().min(5, { message: "Provide Proper Address" }),
  aadhar: z
    .string()
    .trim()
    .min(4, { message: "Enter Last 4 Digit of Aadhar number" })
    .regex(NumberRegex, { message: "Not a valid Number" })
    .refine((value) => refineNumber.test(value), {
      message: "Please Provied Number Only",
    }),
  number: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .regex(NumberRegex, { message: "Not a valid Number" })
    .refine((value) => refineNumber.test(value), {
      message: "Please Provied Number Only",
    }),
  email: z.union([z.string().email(), z.undefined()]),
});
