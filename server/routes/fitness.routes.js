const FitnessController = require('../controllers/fitness.controller');
// const { authenticate } = require('../config/jwt.config'); //TODO include if implement JWT

module.exports = (app) => { //app = express()
  app.get('/api/fitness', FitnessController.findAllFitness);
  app.get('/api/fitness/user/:userId', FitnessController.findFitnessByUser);
  app.get('/api/fitness/:id', FitnessController.findOneFitness);
  app.post('/api/fitness', FitnessController.createFitness);
  app.put('/api/fitness/:id', FitnessController.updateFitness);
  app.delete('/api/fitness/:id', FitnessController.deleteFitness);
  
  //TODO use below if implement JWT
  // app.get('/api/fitness/user/:userId', authenticate, FitnessController.findFitnessByUser);
  // app.get('/api/fitness/:id', authenticate, FitnessController.findOneFitness);
  // app.post('/api/fitness', authenticate, FitnessController.createNewFitness);
  // app.put('/api/fitness/:id', authenticate, FitnessController.updateFitness);
  // app.delete('/api/fitness/:id', authenticate, FitnessController.deleteFitness);

}