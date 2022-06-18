const routes = require('express').Router();
const path = require('path');

routes.use('/', require('./swagger.ts'));
routes.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/../views/home.html'));
});
routes.use('/diecasts', require('./diecasts.ts'));
routes.use('/collectibles', require('./collectibles.ts'));

module.exports = routes;
