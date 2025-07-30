import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log('typeof PG_PASSWORD:', typeof process.env.PG_PASSWORD);
console.log('value of PG_PASSWORD:', process.env.PG_PASSWORD);


const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT), // Ensure port is a number
});

// Connect to the database
db.connect()
  .then(() => console.log('✅ Connected to PostgreSQL database'))
  .catch((err) => {
    console.error('❌ Database connection error:', err.stack);
    process.exit(1);
  });


db.on('error', (err) => {
  console.error('❌ Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = (text, params) => db.query(text, params);
