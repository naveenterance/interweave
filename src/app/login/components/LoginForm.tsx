import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LOGIN_USER } from "../../../utils/db/auth/mutation"; // Replace with your actual login mutation
import { useDispatch } from "react-redux";
import { logout, login } from "@/utils/redux/actions/Auth";
import { useSelector } from "react-redux";

type LoginFormProps = {
  onLoginSuccess: () => void; // Callback to handle successful login
};

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [loginUser] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.value);

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
  console.log(JSON.stringify(user));
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

        dispatch(login({ email: data.login.email, password: data.login.name }));
        console.log(JSON.stringify(data));
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
