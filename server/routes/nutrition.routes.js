const NutritionController = require('../controllers/nutrition.controller');
// const { authenticate } = require('../config/jwt.config'); //TODO include if implement JWT

module.exports = (app) => { 
  app.get('/api/nutrition', NutritionController.findAllNutritions);
  app.get('/api/nutrition/user/:firstName', NutritionController.findNutritionByUser);
  app.get('/api/nutrition/:id', NutritionController.findOneNutrition);
  app.post('/api/nutrition', NutritionController.createNutrition);
  app.put('/api/nutrition/:id', NutritionController.updateNutrition);
  app.delete('/api/nutrition/:id', NutritionController.deleteNutrition);
  
  //TODO use below if implement JWT
  // app.get('/api/nutrition', authenticate, NutritionController.findAllNutritions);
  // app.get('/api/nutrition/user/:userId', authenticate, NutritionController.findNutritionByUser);
  // app.get('/api/nutrition/:id', authenticate, NutritionController.findOneNutrition);
  // app.post('/api/nutrition', authenticate, NutritionController.createNutrition);
  // app.put('/api/nutrition/:id', authenticate, NutritionController.updateNutrition);
  // app.delete('/api/nutrition/:id', authenticate, NutritionController.deleteNutrition);


}