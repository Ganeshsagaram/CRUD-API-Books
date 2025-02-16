import { MongoClient } from "mongodb";

import dotenv from 'dotenv';
dotenv.config();
export async function dbConnection() {
    const uri=process.env.ATLAS_URI;
    const client=new MongoClient(uri);
      const connection=await client.connect();
      return connection;
}
// dbConnection();