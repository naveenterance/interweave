"use client";
import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CREATE_USER, UPDATE_USER } from "../../../utils/db/auth/mutation";

type UserFormProps = {
  userId?: string;
  isEdit?: boolean;
};

const UserForm: React.FC<UserFormProps> = ({ userId, isEdit }) => {
  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    avatar: Yup.string().url("Invalid URL format"),
    cart: Yup.string(),
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
    cart: "",
  };

  // Form submission handler
  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      if (isEdit) {
        await updateUser({
          variables: { id: userId, ...values },
        });
        alert("User updated successfully!");
      } else {
        await createUser({
          variables: {
            name: values.name,
            email: values.email,
            password: values.password,
            avatar: values.avatar,
            cart: values.cart ? values.cart.split(",") : [],
          },
        });
        alert("User created successfully!");
      }
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <Field name="avatar" placeholder="Avatar URL" />
            <ErrorMessage name="avatar" component="div" className="error" />
          </div>

          <div>
            <Field name="cart" placeholder="Cart (comma-separated)" />
            <ErrorMessage name="cart" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isEdit ? "Update User" : "Create User"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
