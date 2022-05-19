const connect = require('../db/connect');
// const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
   const result = connect.getCollection().find();
   result.toArray().then((documents) => {
      res.status(200).json(documents);
   });
};

const addDiecast = async (req, res) => {
   const diecast = {
      carNumber: req.body.carNumber,
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      scale: req.body.scale,
      sponsor: req.body.sponsor,
      driverFirst: req.body.driverFirst,
      driverLast: req.body.driverLast,
      imageUrl: req.body.imageUrl,
   };
   const response = await connect.getCollection().insertOne(diecast);
   if (response.acknowledged) res.status(201).json(response);
   else res.status(500).json(response.error || 'Error creating the diecast.');
};

module.exports = {
   getAll,
   addDiecast,
};
