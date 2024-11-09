"use client";
import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LOGIN_USER } from "./mutation"; // Replace with your actual login mutation

type LoginFormProps = {
  onLoginSuccess: () => void; // Callback to handle successful login
};

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [loginUser] = useMutation(LOGIN_USER);

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
  };

  // Form submission handler
  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      const { data } = await loginUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });

      if (data?.login) {
        alert(`Login successful! Welcome, ${data.login.name}`);
        onLoginSuccess();
      } else {
        alert("Invalid email or password.");
      }

      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login.");
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
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
