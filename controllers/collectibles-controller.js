const connect = require('../db/connect');
const validator = require('../utils/validator')
const ObjectId = require('mongodb').ObjectId;

// Get all collectibles
const getCollectibles = async (req, res) => {
   try {
      const result = connect.getCollection("collectibles").find();
      result.toArray().then((documents) => {
         res.status(200).json(documents);
      });
   } catch (err) {
      res.status(500).json(err);
   }
};

// Get one collectible by id
const getCollectible = async (req, res) => {
   try {
      const collectibleId = new ObjectId(req.params.id);
      const result = connect.getCollection("collectibles").find({ _id: collectibleId });
      result.toArray().then((documents) => {
         res.status(200).json(documents[0]);
      });
   } catch (err) {
      res.status(500).json(err);
   }
};

// Add a new collectible
const addCollectible = async (req, res) => {   
   try {
      const collectible = {
         name: req.body.name,
         description: req.body.description // not required
      };

      // Validate
      let validatorMessage = validator.checkCollectible(collectible);
      if (validatorMessage != "valid") {
         res.status(400).send({ message: validatorMessage });
         return;
      }
      
      const response = await connect.getCollection("collectibles").insertOne(collectible);

      if (response.acknowledged) {
         res.status(201).json(response);
      } else {
         res.status(500).json(response.error || 'Error creating the collectible.');
      }
   } catch (err) {
      res.status(500).json(err);
   }
};

// Edit a collectible
const editCollectible = async (req, res) => {
   try {
      const collectible = {
         name: req.body.name,
         description: req.body.description // not required
      };
      
      // Validate
      let validatorMessage = validator.checkCollectible(collectible);
      if (validatorMessage != "valid") {
         res.status(400).send({ message: validatorMessage });
         return;
      }
      
      const collectibleId = new ObjectId(req.params.id);
      const response = await connect.getCollection("collectibles").replaceOne({ _id: collectibleId }, collectible);

      if (response.modifiedCount > 0) {
         res.status(204).send();
      } else {
         res.status(500).json(response.error || 'Error updating collectible');
      }
   } catch (err) {
      res.status(500).json(err);
   }
};

// Delete a collectible
const deleteCollectible = async (req, res) => {
   try {
      const collectibleId = new ObjectId(req.params.id);
      const response = await connect.getCollection("collectibles").remove({ _id: collectibleId }, true);
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
   getCollectibles,
   getCollectible,
   addCollectible,
   editCollectible,
   deleteCollectible
};
