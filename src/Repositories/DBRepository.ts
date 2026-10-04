import type PG from "pg";

export class DBRepository{
    
    private __db: PG.Client 
    
    constructor(db: PG.Client){
        this.__db = db
    }
}