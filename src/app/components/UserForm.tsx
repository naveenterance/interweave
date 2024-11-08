"use client";
import React from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { CREATE_USER, UPDATE_USER } from "./mutation";

type UserFormProps = {
  userId?: string;
  isEdit?: boolean;
};

const UserForm: React.FC<UserFormProps> = ({ userId, isEdit }) => {
  const { register, handleSubmit, reset } = useForm();
  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const onSubmit = async (data: any) => {
    try {
      if (isEdit) {
        await updateUser({
          variables: { id: userId, ...data },
        });
        alert("User updated successfully!");
      } else {
        await createUser({
          variables: {
            name: data.name,
            email: data.email,
            password: data.password,
            avatar: data.avatar,
            cart: data.cart ? data.cart.split(",") : [],
          },
        });
        alert("User created successfully!");
      }
      reset();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" required />
      <input {...register("email")} placeholder="Email" type="email" required />
      <input
        {...register("password")}
        placeholder="Password"
        type="password"
        required
      />
      <input {...register("avatar")} placeholder="Avatar URL" />
      <input {...register("cart")} placeholder="Cart (comma-separated)" />
      <button type="submit">{isEdit ? "Update User" : "Create User"}</button>
    </form>
  );
};

export default UserForm;
