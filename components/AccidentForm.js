// components/AccidentForm.js
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import styles from '../styles/AccidentForm.module.css';

const AccidentForm = ({ onSave }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('/api/accidents', values);
      setSubmitted(true);
      resetForm();
      onSave();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        intensity: '',
        inclination: '',
        accidentTime: '',
        severity: 'slight',
      }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="username">Username</label>
            <Field id="username" name="username" type="text" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="intensity">Intensity (m/s²)</label>
            <Field id="intensity" name="intensity" type="number" step="0.1" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="inclination">Inclination (degrees)</label>
            <Field id="inclination" name="inclination" type="number" step="0.1" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="accidentTime">Time of Accident</label>
            <Field id="accidentTime" name="accidentTime" type="datetime-local" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="severity">Severity</label>
            <Field id="severity" name="severity" as="select" className={styles.select}>
              <option value="slight">Slight</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </Field>
          </div>
          <button type="submit" className={styles.button}>Submit</button>
          {submitted && <p>Data submitted successfully!</p>}
        </Form>
      )}
    </Formik>
  );
};

export default AccidentForm;
