const routes = require('express').Router();
const diecastsController = require('../controllers/diecasts-controller');
const path = require('path');
// const ObjectId = require('mongodb').ObjectId;

// routes.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname + '/../views/diecasts.html'));
// });

routes.get('/', diecastsController.getAll);       // Get all diecasts
routes.post('/', diecastsController.addDiecast);  // Add a diecast

module.exports = routes;