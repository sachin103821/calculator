const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URL);

async function connectDB() {
    try {
        await client.connect();
        console.log('MongoDB connected');
        global.db = client.db();
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
