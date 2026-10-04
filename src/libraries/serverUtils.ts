import ENV from "../environment";
import { Log } from "./logging";


// Handle a graceful shutdown of the server
export const serverGracefulShutdown = async () => {
    Log.warn("Shutting down...");
    // add database close code here

    process.exit(0);
}

export async function logServerStart() {
    Log.title(`Pennywise Reborn API Server`)
    Log.success("API Server has started!")
    Log.info("API Endpoint:", ENV.API_URL);
    Log.info("API External Url:", ENV.API_EXTERNAL_URL);
}