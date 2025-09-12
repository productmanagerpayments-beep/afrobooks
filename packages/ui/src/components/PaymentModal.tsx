"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface Props {
  method: string;
  onClose: () => void;
}

export const PaymentModal: FC<Props> = ({ method, onClose }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(() => onClose())}
        className="bg-white rounded p-4 w-80 space-y-2"
      >
        <h2 className="text-lg">{method}</h2>
        <input
          {...register("amount")}
          placeholder="Amount"
          className="w-full border p-2"
        />
        <input
          {...register("firstName")}
          placeholder="First name"
          className="w-full border p-2"
        />
        <input
          {...register("surname")}
          placeholder="Surname"
          className="w-full border p-2"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-2"
        />
        <input
          {...register("phone")}
          placeholder="Phone"
          className="w-full border p-2"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2">
          CONFIRM
        </button>
      </form>
    </div>
  );
};
