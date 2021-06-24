const { Router } = require('express');
const curriculumController = require('../controllers/curriculumController')();

function curriculumRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(curriculumController.getData);

  return routes;
}

module.exports = curriculumRouter();
