const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; 
const client = new  MongoClient(url);
const database='E-Comm';

async function dbConnection() 
{
    let result = await client.connect();
    db = result.db(database)
    return db.collection('Products')

}
module.exports = dbConnection;    