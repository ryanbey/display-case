const collectibleRoutes = require('express').Router();
const collectiblesController = require('../controllers/collectibles-controller');

collectibleRoutes.get('/', collectiblesController.getCollectibles);        // Get all collectibles
collectibleRoutes.get('/:id', collectiblesController.getCollectible)       // Get one collectible
collectibleRoutes.post('/', collectiblesController.addCollectible);        // Add a collectible
collectibleRoutes.put('/:id', collectiblesController.editCollectible)      // Edit a collectible
collectibleRoutes.delete('/:id', collectiblesController.deleteCollectible) // Delete a collectible

module.exports = collectibleRoutes;