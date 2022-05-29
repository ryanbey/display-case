const connect = require('../db/connect');
const validator = require('../utils/validator')
const ObjectId = require('mongodb').ObjectId;

// Get all diecasts
const getDiecasts = async (req, res) => {
   try {
      const result = connect.getCollection().find();
      result.toArray().then((documents) => {
         res.status(200).json(documents);
      });
   } catch (err) {
      res.status(500).json(err);
   }
};

// Get one diecast by id
const getDiecast = async (req, res) => {
   try {
      const diecastId = new ObjectId(req.params.id);
      const result = connect.getCollection().find({ _id: diecastId });
      result.toArray().then((documents) => {
         res.status(200).json(documents[0]);
      });
   } catch (err) {
      res.status(500).json(err);
   }
};

// Add a new diecast
const addDiecast = async (req, res) => {   
   try {
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

      if (response.acknowledged) {
         res.status(201).json(response);
      } else {
         res.status(500).json(response.error || 'Error creating the diecast.');
      }
   } catch (err) {
      res.status(500).json(err);
   }
};

// Edit a diecast
const editDiecast = async (req, res) => {
   try {
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
      
      const diecastId = new ObjectId(req.params.id);
      const response = await connect.getCollection().replaceOne({ _id: diecastId }, diecast);

      if (response.modifiedCount > 0) {
         res.status(204).send();
      } else {
         res.status(500).json(response.error || 'Error updating diecast');
      }
   } catch (err) {
      res.status(500).json(err);
   }
};

// Delete a diecast
const deleteDiecast = async (req, res) => {
   try {
      const diecastId = new ObjectId(req.params.id);
      const response = await connect.getCollection().remove({ _id: diecastId }, true);
      if (response.deletedCount > 0) {
         res.status(204).send();
      } else {
          res.status(500).json(response.error || 'Error deleting contact');
      }
   } catch (err) {
      res.status(500).json(err);
   }
};

module.exports = {
   getDiecasts,
   getDiecast,
   addDiecast,
   editDiecast,
   deleteDiecast
};
