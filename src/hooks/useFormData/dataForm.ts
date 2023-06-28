import { useState } from "react";
import { subscribeProps } from "./formProps";

export const useSubscribeForm = (initialValues: subscribeProps) => {
  const [form, setForm] = useState(initialValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleChange = (event: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return { form, handleChange, handleSubmit };
};
