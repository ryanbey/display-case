const routes = require('express').Router();
const connect = require('../db/connect');
// const ObjectId = require('mongodb').ObjectId;

// Get all diecasts
routes.get('/', (req, res) => {
   try {
      const result = connect.getCollection().find();

      result.toArray().then((documents) => {
         res.status(200).json(documents);
         console.log('Returned all diecasts!');
      });
   } catch (err) {
      res.status(500).json(err);
   }
});

// Add a diecast
routes.post('/', async (req, res) => {
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
         imageUrl: req.body.imageUrl
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
});

module.exports = routes;