import { Log } from "../libraries/logging"
import { NODE_ENV } from "../environment"


export function logRouteConnection(req: { method: any; url: any; headers: any }, _: any, next: () => void): void{
    Log.info(`[${req.method}] - '${req.url}' Headers:`, NODE_ENV !== "development" ? "not shown in production" :req.headers)
    next()
}