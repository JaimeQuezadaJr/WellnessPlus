const FitnessController = require('../controllers/fitness.controller');
// const { authenticate } = require('../config/jwt.config'); //TODO include if implement JWT

module.exports = (app) => { //app = express()
  app.get('/api/fitness/user/:userId', FitnessController.findNutritionByUser);
  app.get('/api/fitness/:id', FitnessController.findOneNutrition);
  app.post('/api/fitness', FitnessController.createNewNutrition);
  app.put('/api/fitness/:id', FitnessController.updateNutrition);
  app.delete('/api/fitness/:id', FitnessController.deleteNutrition);
  
  //TODO use below if implement JWT
  // app.get('/api/fitness/user/:userId', authenticate, FitnessController.findNutritionByUser);
  // app.get('/api/fitness/:id', authenticate, FitnessController.findOneNutrition);
  // app.post('/api/fitness', authenticate, FitnessController.createNewNutrition);
  // app.put('/api/fitness/:id', authenticate, FitnessController.updateNutrition);
  // app.delete('/api/fitness/:id', authenticate, FitnessController.deleteNutrition);

}