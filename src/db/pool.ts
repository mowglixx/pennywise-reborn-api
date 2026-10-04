import pg from 'pg';
import ENV from '../environment';
import { Log } from '../libraries/logging';

const { Pool } = pg

export const pool = new Pool({
    connectionString: ENV.DB_URL
})

export const db = await pool.connect((err) => {
    Log.warn("Attempting to connect to database")
    if(!err){
        Log.success("Database connected!")

        // if the DB_URL works, it's best to get rid of it to prevent a password leak 
        ENV.DB_URL = "Removed for safety"
        // flag the 
        ENV.DB_CONNECTED = true        
    } 
    else{
        Log.error("Database connection failed")
        Log.error("Database Error:", err?.message)
    }
    // Log the environment if the 
    Log.info(`Current environment:`, ENV.NODE_ENV !== "production" ? ENV : "Environment not shown outside dev environment")
})