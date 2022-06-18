const swaggerAutogen = require('swagger-autogen')();

const doc = {
   info: {
      title: 'Display Case API',
      description: 'API for NASCAR colectibles stored in my display case.'
   },
   // Test Locally: localhost:3000
   // Use Heroku: display-case.herokuapp.com
   host: 'display-case.herokuapp.com',
   schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//    await import('./index.js');
// });
