const Fitness = require('../models/fitness.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const User = require('../models/user.model');
module.exports = {
  findAllFitnessGoals: (req, res) => {
    Fitness.find({})
      .populate('createdBy', 'firstName lastName age email')
      .then((fitness) => {
        res.json(fitness);
      })
      .catch((err) => {
        console.log('ERROR IN Get all', err);
        res.status(400).json({ message: 'something went wrong in find all fitness goals', error: err });
      });
  },
  findFitnessByUser: (req, res) => {
    console.log('IS THIS WORKING', req.params.firstName);
    User.findOne({ firstName: req.params.firstName }).then((user) => {
      console.log('USERID', user._id);
      Fitness.find({ createdBy: user._id })
        .populate('createdBy', 'firstName lastName age email') 
        .then((fitness) => {
          console.log('fitnessSS'.fitness);
          res.json(fitness);
        })
        .catch((err) => {
          console.log('ERROR IN Get all fitness by user', err);
          res.status(400).json({ message: 'something went wrong in find all fitness by user', error: err });
        })
        .catch((err) => {
          console.log('ERROR IN Get all fitness by user', err);
          res.status(400).json({ message: 'something went wrong in find all fitness by user', error: err });
        });
    });
  },
  findFitness: (req, res) => {
    Fitness.findOne({ _id: req.params.id })
      .then((fitness) => {
        res.json(fitness);
      })
      .catch((err) => {
        console.log('ERROR IN Get one fitness', err);
        res.status(400).json({ message: 'something went wrong in find one fitness', error: err });
      });
  },
  createFitness: (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    Fitness.create({ ...req.body, createdBy: user._id })
      .then((newFitness) => {
        res.status(201).json(newFitness);
      })
      .catch((err) => {
        console.log('ERROR IN create Fitness', err);
        res
          .status(400)
          .json({ message: 'something went wrong in create Fitness', errors: err.errors });
      });
  },
  updateFitness: (req, res) => {
    Fitness.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((fitness) => {
        res.json(fitness);
      })
      .catch((err) => {
        console.log('ERROR IN update fitness', err);
        res.status(400).json({ message: 'something went wrong in update fitness', error: err });
      });
  },
  deleteFitness: (req, res) => {
    Fitness.deleteOne({ _id: req.params.id })
      .then((fitness) => {
        res.json(fitness);
      })
      .catch((err) => {
        console.log('ERROR IN delete fitness', err);
        res.status(400).json({ message: 'something went wrong in delete fitness', error: err });
      });
  },
};