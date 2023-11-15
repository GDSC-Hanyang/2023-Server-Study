const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: 'localhost:3300',
        basePath: '/'
    },
    apis: ['./src/app/User/userRoute.js']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};


