const routes = require('express').Router();

// routes.use('/', require('./swagger'));
routes.get('/', (req, res) => { res.send('This is the home page wow'); })
routes.use('/diecasts', require('./diecasts'));

module.exports = routes;