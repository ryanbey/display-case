const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let _client;
let _collectionDiecasts;
let _collectionCollectibles;

const initDatabase = () => {
   MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
      if (err) throw err;
      _client = client;
      _collectionDiecasts = client.db('display_case').collection('diecasts');
      _collectionCollectibles = client.db('display_case').collection('collectibles');
      console.log('Database connected successfully!');
   });
};

const getCollection = (collection) => {
   if (collection === "diecasts") {
      return _collectionDiecasts;
   }
   else if (collection === "collectibles") {
      return _collectionCollectibles;
   }
   else {
      return;
   }
};

module.exports = {
   initDatabase,
   getCollection
};