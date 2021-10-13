import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: 
      Yup.string()
      .required('Please enter password')
      .min(8, 'Password is too short - should be 8 chars minimum')
  });

const home = () => {
    return (
        <>
<div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         email: '',
         password: '',
       }}
       validationSchema={SigninSchema}
       onSubmit={values => {
        axios.post('https://reqres.in/api/login', {
          email    : values.email,
          password : values.password
        })
        .then((response) => {
          console.log(response)
          alert('login successfull')
        })
        .catch(() => {
          alert('please enter valid credentials')
        })
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="email" type="email" placeholder="Email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <Field name="password" type="password" placeholder="Password" />
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
        </>
    )
}

export default home;