import { MongoClient } from "mongodb";
import { MongoCredentials } from "../secrets.js";

export function dbConnect() {
    const client = new MongoClient(MongoCredentials.URi);
    return client.db(MongoCredentials.DB)
}