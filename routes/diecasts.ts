const diecastRoutes = require('express').Router();
const diecastsController = require('../controllers/diecasts-controller.ts');

diecastRoutes.get('/', diecastsController.getDiecasts);        // Get all diecasts
diecastRoutes.get('/:id', diecastsController.getDiecast)       // Get one diecast
diecastRoutes.post('/', diecastsController.addDiecast);        // Add a diecast
diecastRoutes.put('/:id', diecastsController.editDiecast)      // Edit a diecast
diecastRoutes.delete('/:id', diecastsController.deleteDiecast) // Delete a diecast

module.exports = diecastRoutes;