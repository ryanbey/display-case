const routes = require('express').Router();
const path = require('path');

routes.use('/', require('./swagger'));
routes.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/../views/home.html'));
});
routes.use('/diecasts', require('./diecasts'));

module.exports = routes;
