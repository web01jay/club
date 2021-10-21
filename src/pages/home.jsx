import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { SignUp } from "../axios/helper";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Please enter password")
    .min(8, "Password is too short - should be 8 chars minimum"),
});

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
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
          onSubmit={
            async (values) => {
              setIsSubmitting(true)
              try{
                const result = await SignUp(values.email, values.password);
                if(result && result.user.accessToken){
                  alert('user created')
                }    
              }catch(e){
                console.log(e.message)
              }
              setIsSubmitting(false)
            }            
          }
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

export default Home;
