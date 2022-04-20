const express = require('express');
const empleadoRouter = require('../routes/empleadoInfo.router');


function routerApi(app) {
    const router = express.Router();
     /* Endpoint estático: http://localhost:5000/api/v1 */
    app.use('/api/v1', router);
    /* Endpoint estático: http://localhost:5000/api/v1/people */
    router.use('/people', empleadoRouter);
  }

  module.exports = routerApi;