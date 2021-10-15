import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { LoginApi } from "../axios/helper";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Please enter password")
    .min(8, "Password is too short - should be 8 chars minimum"),
});

const home = () => {
  return (
    <>
      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SigninSchema}
          onSubmit={(values) => {
            LoginApi(values.email, values.password);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" type="email" placeholder="Email" />
              {errors.email && touched.email ? <span>{errors.email}</span> : null}
              <Field name="password" type="password" placeholder="Password" />
              {errors.password && touched.password ? (
                <span>{errors.password}</span>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default home;
