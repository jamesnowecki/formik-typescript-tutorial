import React from 'react';
import styles from './App.module.scss';
import { Formik, Field, ErrorMessage } from "formik";
import { string, object } from "yup";

export interface FormValues {
  firstName: string;
  pet: string;
}

const initialValues: FormValues = {
  firstName: "",
  pet: "",
};

const App: React.SFC = () => {
  return (
    <div className={styles.App}>
      <h1>Working with Formik</h1>
      <Formik initialValues={initialValues}
        onSubmit={(values: FormValues) => console.log(values)}
        validationSchema={object().shape({
          firstName: string().required("Enter name plz"),
        })}
        >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              <div>First Name</div>
              <Field type="text" name="firstName"/>
              {
                touched.firstName && errors.firstName
              ? <div>{errors.firstName}</div>
              : null
              }
            </label>
            <label htmlFor="pet">
              <div>Pet</div>
              <Field name="pet" component="select">
                <option>Dog</option>
                <option>Cat</option>
                <option>Other</option>
              </Field>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}</Formik>
    </div>
  );
}



export default App;
