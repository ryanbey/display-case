const routes = require('express').Router();
const collectiblesController = require('../controllers/collectibles-controller');

routes.get('/', collectiblesController.getCollectibles);        // Get all collectibles
routes.get('/:id', collectiblesController.getCollectible)       // Get one collectible
routes.post('/', collectiblesController.addCollectible);        // Add a collectible
routes.put('/:id', collectiblesController.editCollectible)      // Edit a collectible
routes.delete('/:id', collectiblesController.deleteCollectible) // Delete a collectible

module.exports = routes;