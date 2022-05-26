const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all diecasts
const getDiecasts = async (req, res) => {
   const result = connect.getCollection().find();
   result.toArray().then((documents) => {
      res.status(200).json(documents);
   });
};

// Get one diecast by id
const getDiecast = async (req, res) => {
   const diecastId = new ObjectId(req.params.id);
   const result = connect.getCollection().find({ _id: diecastId });
   result.toArray().then((documents) => {
      res.status(200).json(documents[0]);
   });
};

// Add a new diecast
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

// Edit a diecast
const editDiecast = async (req, res) => {
   const diecastId = new ObjectId(req.params.id);
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
   const response = await connect.getCollection().replaceOne({ _id: diecastId }, diecast);
   if (response.modifiedCount > 0) res.status(204).send();
   else res.status(500).json(response.error || 'Error updating diecast');
};

// Delete a diecast
const deleteDiecast = async (req, res) => {
   const diecastId = new ObjectId(req.params.id);
   const response = await connect.getCollection().remove({ _id: diecastId }, true);
   if (response.deletedCount > 0) res.status(204).send();
   else res.status(500).json(response.error || 'Error deleting contact');
};

module.exports = {
   getDiecasts,
   getDiecast,
   addDiecast,
   editDiecast,
   deleteDiecast
};
