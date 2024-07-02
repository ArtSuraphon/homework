// pages/index.js
import Head from 'next/head';
import AccidentForm from '../components/AccidentForm';
import AccidentList from '../components/AccidentList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emergency Accident Data</title>
        <meta name="description" content="Record and view emergency accident data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Emergency Accident Data</h1>
        <AccidentForm onSave={() => window.location.reload()} />
        <AccidentList />
      </main>
    </div>
  );
}
