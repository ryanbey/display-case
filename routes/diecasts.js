const routes = require('express').Router();
const diecastsController = require('../controllers/diecasts-controller');
// const ObjectId = require('mongodb').ObjectId;

routes.get('/', diecastsController.getAll);       // Get all diecasts
routes.post('/', diecastsController.addDiecast);  // Add a diecast

module.exports = routes;