// components/AccidentList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/AccidentList.module.css';

const AccidentList = () => {
  const [accidents, setAccidents] = useState([]);

  useEffect(() => {
    const fetchAccidents = async () => {
      try {
        const response = await axios.get('/api/accidents');
        setAccidents(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAccidents();
  }, []);

  return (
    <div className={styles.listContainer}>
      <h2>Accident Data</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Intensity (m/s²)</th>
            <th>Inclination (degrees)</th>
            <th>Time of Accident</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {accidents.map((accident, index) => (
            <tr key={index}>
              <td>{accident.username}</td>
              <td>{accident.intensity}</td>
              <td>{accident.inclination}</td>
              <td>{accident.accidentTime}</td>
              <td>{accident.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccidentList;
