const MindfulnessController = require('../controllers/mindfulness.controller');
// const { authenticate } = require('../config/jwt.config'); //TODO include if implement JWT

module.exports = (app) => { //app = express()
  app.get('/api/mindfulness/user/:userId', MindfulnessController.findNutritionByUser);
  app.get('/api/mindfulness/:id', MindfulnessController.findOneNutrition);
  app.post('/api/mindfulness', MindfulnessController.createNewNutrition);
  app.put('/api/mindfulness/:id', MindfulnessController.updateNutrition);
  app.delete('/api/mindfulness/:id', MindfulnessController.deleteNutrition);
  
  //TODO use below if implement JWT
  // app.get('/api/mindfulness/user/:userId', authenticate, MindfulnessController.findNutritionByUser);
  // app.get('/api/mindfulness/:id', authenticate, MindfulnessController.findOneNutrition);
  // app.post('/api/mindfulness', authenticate, MindfulnessController.createNewNutrition);
  // app.put('/api/mindfulness/:id', authenticate, MindfulnessController.updateNutrition);
  // app.delete('/api/mindfulness/:id', authenticate, MindfulnessController.deleteNutrition);

}