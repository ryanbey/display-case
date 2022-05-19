const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let _client;
let _collection;

const initDatabase = () => {
   MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
      if (err) throw err;
      _client = client;
      _collection = client.db('display_case').collection('diecasts');
      console.log('Database connected successfully!');
   });
};

const getCollection = () => {
   return _collection;
};

module.exports = {
   initDatabase,
   getCollection
};