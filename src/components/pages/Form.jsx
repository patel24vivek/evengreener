import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import jsPDF from 'jspdf';


 const Formo = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phonenumber : '',
      }}


      validationSchema={ Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})}
      onSubmit={values => {
        var pdf = new jsPDF();
         pdf.setFontSize(16);
  pdf.text(values.firstName, 10, 20);
   pdf.setFontSize(20);
   pdf.text(values.lastName, 10, 30);
    pdf.text(values.email, 10, 40);

    pdf.save('form-data.pdf');
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Formo;