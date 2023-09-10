import React from "react";
import { z } from "zod";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AgenstDetail = {
  name: string;
  code: string;
};

export const AgentsSchema: z.ZodType<AgenstDetail> = z.object({
  name: z.string().trim().min(1, { message: "please Enter Name" }),
  code: z.string().trim().min(4, { message: "Please enter proper code" }),
});

export type TplanDetail = {
  term: string;
  sumassuard: string;
};

export const PlanSchema: z.ZodType<TplanDetail> = z.object({
  term: z.string().trim().min(2, { message: "Please enter Term" }),
  sumassuard: z.string().trim().min(4, { message: "Please enter Sum assaurd" }),
});
