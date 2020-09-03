import React from 'react';
import styles from './App.module.scss';
import { Formik } from "formik";

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
        render={({ handleSubmit, handleChange}) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              <div>First Name</div>
              <input type="text" name="firstName"/>
            </label>
            <label htmlFor="pet">
              <div>Pet</div>
              <select name="pet" onChange={handleChange}>
                <option>Dog</option>
                <option>Cat</option>
                <option>Other</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}></Formik>
    </div>
  );
}

export default App;
