// pages/api/accidents.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'emergencyAccidents';

async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  return client.db(dbName);
}

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const accidentsCollection = db.collection('accidents');

  if (req.method === 'POST') {
    const { username, intensity, inclination, accidentTime, severity } = req.body;

    try {
      await accidentsCollection.insertOne({
        username,
        intensity,
        inclination,
        accidentTime,
        severity,
        createdAt: new Date(),
      });
      res.status(201).json({ message: 'Accident data saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving accident data' });
    }
  } else if (req.method === 'GET') {
    try {
      const accidents = await accidentsCollection.find({}).toArray();
      res.status(200).json(accidents);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching accident data' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
