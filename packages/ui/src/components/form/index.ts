"use client";
import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

export const AmountInput: FC<{ register: UseFormRegister<any> }> = ({
  register,
}) =>
  React.createElement("input", {
    type: "number",
    ...register("amount"),
    className: "w-full border p-2",
    placeholder: "Amount",
  });

export const NameInput: FC<{ register: UseFormRegister<any> }> = ({
  register,
}) =>
  React.createElement("input", {
    ...register("name"),
    className: "w-full border p-2",
    placeholder: "Name",
  });

export const EmailInput: FC<{ register: UseFormRegister<any> }> = ({
  register,
}) =>
  React.createElement("input", {
    type: "email",
    ...register("email"),
    className: "w-full border p-2",
    placeholder: "Email",
  });

export const PhoneInput: FC<{ register: UseFormRegister<any> }> = ({
  register,
}) =>
  React.createElement("input", {
    ...register("phone"),
    className: "w-full border p-2",
    placeholder: "Phone",
  });
