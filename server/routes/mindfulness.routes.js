const MindfulnessController = require('../controllers/mindfulness.controller');
// const { authenticate } = require('../config/jwt.config'); //TODO include if implement JWT

module.exports = (app) => { //app = express()
  app.get('/api/mindfulness', MindfulnessController.findAllMindfulnessGoals);
  app.get('/api/mindfulness/user/:userId', MindfulnessController.findMindfulnessByUser);
  app.get('/api/mindfulness/:id', MindfulnessController.findOneMindfulness);
  app.post('/api/mindfulness', MindfulnessController.createMindfulness);
  app.put('/api/mindfulness/:id', MindfulnessController.updateMindfulness);
  app.delete('/api/mindfulness/:id', MindfulnessController.deleteMindfulness);
  
  //TODO use below if implement JWT
  // app.get('/api/mindfulness/user/:userId', authenticate, MindfulnessController.findMindfulnessByUser);
  // app.get('/api/mindfulness/:id', authenticate, MindfulnessController.findOneMindfulness);
  // app.post('/api/mindfulness', authenticate, MindfulnessController.createNewMindfulness);
  // app.put('/api/mindfulness/:id', authenticate, MindfulnessController.updateMindfulness);
  // app.delete('/api/mindfulness/:id', authenticate, MindfulnessController.deleteMindfulness);

}