import cors from 'cors'
import { FRONTEND_URLS } from '../environment'

export default function customCors(){
    const origin = FRONTEND_URLS
    return cors({
        origin, 
        credentials: true
    })
}