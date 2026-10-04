// environment
import 'dotenv/config'
import { API_PORT } from './environment';

// express and middleware
import express, { type Express, type Request, type Response } from 'express';
import customCors from './middleware/cors';
import { logServerStart, serverGracefulShutdown } from './libraries/serverUtils';
import { logRouteConnection } from './middleware/logging';

// Routers


// 
const App: Express = express();

// Middleware
App.use(customCors());
App.use(express.json())
App.use(logRouteConnection)

// placeholder code to remind me how to handle routes
App.get('/api', (_: Request, res: Response) => {
    res.send({
        status: "ok",
    });
});

App.get('/api/health', (_: Request, res: Response) => {
    res.send({
        status: "ok",
        db: "placeholder"
    });
});

process.on("SIGTERM", serverGracefulShutdown);
process.on("SIGINT", serverGracefulShutdown);

App.listen(API_PORT,logServerStart);