import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { drizzle } from 'drizzle-orm/node-postgres';
import { shipmentsTable } from './schema';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const db = drizzle(process.env.DATABASE_URL!);

async function importShipments() {
  try {
    // Read the shipments JSON file
    const data = await readFile(new URL('./shipments.json', import.meta.url), 'utf-8');
    const shipments = JSON.parse(data);

    // Insert shipments into the database
    await db.insert(shipmentsTable).values(shipments);

    console.log('Shipments imported successfully!');
  } catch (error) {
    console.error('Error importing shipments:', error);
  }
}

importShipments();