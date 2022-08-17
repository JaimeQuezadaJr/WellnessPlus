const Fitness = require('../models/fitness.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const User = require('../models/user.model');

module.exports.findAllFitnessGoals = (req, res) => {
    Nutrition.find({})
        .populate('createdBy', 'email')
        .then((allFitnessGoals) => {
            res.json(allFitnessGoals)
        })
        .catch((err) => {
            console.log('ERROR IN Get all', err);
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findOneFitness = (req, res) => {
    Fitness.findOne({_id:req.params.id})
        .then((oneFitness) => {
            res.json(oneFitness)
        })
        .catch((err) => {
            console.log('ERROR IN Get Fitness', err);
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findFitnessByUser = (req, res) => {
  // console.log('IS THIS WORKING', req.params.email);
  User.findOne({ email: req.params.email })
    .then((user) => {   //TODO decide whether to keep it until complete front end useState/localstorage
      // console.log('USERID', user._id);
      Fitness.find({ createdBy: req.params.userId }) //TODO may need to change find parameter (user._id)
      .populate('createdBy', '_id email')
      .then((fitness) => {
          res.json(fitness);
      })
      .catch((err) => {
          console.log('ERROR', err);
          res.status(400).json({ message: 'something went wrong in find all fitness goals', error: err });
      })
  })
  .catch((err) => {
      res.status(400).json({ message: 'something went wrong in find all Fitness', error: err });
  });
}

module.exports.createFitness = (req, res) => {
    //TODO may needed when implementing JWT
    const user = jwt.verify(req.cookies.userToken, SECRET);
    Fitness.create({ ...req.body, createdBy: user._id })
    // Fitness.create(req.body)
        .then((newFitness) => {
            res.status(201).json(newFitness)
        })
        .catch((err) => {
            console.log('ERROR IN create Fitness', err);
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.updateFitness = (req, res) => {
    Fitness.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true, runValidators: true}
        )
        .then((updateFitness) => {
            res.json(updateFitness)
        })
        .catch((err) => {
            console.log('ERROR IN update Fitness', err);
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.deleteFitness = (req,res) => {
  Fitness.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.json({result:result})
    })
    .catch((err) => {
        res.status(400).json({message: 'Something went wrong', error:err})
    });
}