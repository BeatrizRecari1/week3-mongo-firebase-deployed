import { dbConnect } from "./dbConnect.js";
import { MongoCredentials } from "../secrets.js";

const collectionName = MongoCredentials.COLLECTION;

// Get All
export async function getAllDoc(req, res) {
    const db = dbConnect();
    const collection = await db.collection(collectionName).find({}).limit(10).toArray();

    console.table(collection);
    res.send(collection);
}

// Post: Doc
export async function postDoc(req, res) {
    const newDoc = req.body
    // { "id": 1002, "first_name": "Nugget", "last_name": "mojo", "eamil": "hoho@email.com", "ip_address": "yourmom"}

    const db = dbConnect();
    await db.collection(collectionName).insertOne(newDoc)
        .catch(err => {
            res.status(500).send(err)
            return
        })
        res.status(201).send( {message: "New Doc Inserted"} );
}


