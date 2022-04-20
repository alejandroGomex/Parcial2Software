const mongoose = require('mongoose');
const express = require('express');
//const sgMail = require('@sendgrid/mail');

const app = express();
const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./src/handlers/error.handler');
const routerApi = require('./src/routes');
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => console.log('active port', port));

mongoose.connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log("succes connection with mongo"))
  .catch((error) => console.log(error));


  
  app.use(express.json());
  app.use(logErrors);
  app.use(errorHandler);
  app.use(boomErrorHandler);
  routerApi(app);