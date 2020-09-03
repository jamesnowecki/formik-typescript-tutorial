import React from 'react';
import styles from './App.module.scss';
import { Formik, Field } from "formik";

const initialValues = {
  firstName: "",
  pet: "",
};

const App: React.SFC = () => {
  return (
    <div className={styles.App}>
      <h1>Working with Formik</h1>
      <Formik initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              <div>First Name</div>
              <Field type="text" name="firstName"/>
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
        )}></Formik>
    </div>
  );
}

export default App;
