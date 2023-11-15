module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');
    const { swaggerUi, specs } = require('./swagger');

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    
    /**
    * @swagger
    * paths:
    *  /app/test:
    *   get:
    *     tags: [Test]
    *     summary: 테스트 api - get
    *     responses:
    *       "200":
    *         description: 테스트 api - get 실행 성공  
    */

    // 0. 테스트 API
    app.get('/app/test', user.getTest)

};
