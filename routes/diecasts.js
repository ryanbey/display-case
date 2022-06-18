const routes = require('express').Router();
const diecastsController = require('../controllers/diecasts-controller');

routes.get('/', diecastsController.getDiecasts);        // Get all diecasts
routes.get('/:id', diecastsController.getDiecast)       // Get one diecast
routes.post('/', diecastsController.addDiecast);        // Add a diecast
routes.put('/:id', diecastsController.editDiecast)      // Edit a diecast
routes.delete('/:id', diecastsController.deleteDiecast) // Delete a diecast

module.exports = routes;