const Mindfulness = require('../models/mindfulness.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const User = require('../models/user.model');
module.exports = {
    findAllMindfulness: (req, res) => {
    Mindfulness.find({})
      .populate('createdBy', 'firstName lastName age email')
      .then((mindfulness) => {
        res.json(mindfulness);
      })
      .catch((err) => {
        console.log('ERROR IN Get all', err);
        res.status(400).json({ message: 'something went wrong in find all mindfulness goals', error: err });
      });
  },
  findMindfulnessByUser: (req, res) => {
    console.log('IS THIS WORKING', req.params.firstName);
    User.findOne({ firstName: req.params.firstName }).then((user) => {
      console.log('USERID', user._id);
      Mindfulness.find({ createdBy: user._id })
        .populate('createdBy', 'firstName lastName age email') 
        .then((mindfulness) => {
          console.log('mindfulnessSS'.mindfulness);
          res.json(mindfulness);
        })
        .catch((err) => {
          console.log('ERROR IN Get all mindfulness by user', err);
          res.status(400).json({ message: 'something went wrong in find all mindfulness by user', error: err });
        })
        .catch((err) => {
          console.log('ERROR IN Get all mindfulness by user', err);
          res.status(400).json({ message: 'something went wrong in find all mindfulness by user', error: err });
        });
    });
  },
  findOneMindfulness: (req, res) => {
    Mindfulness.findOne({ _id: req.params.id })
      .then((mindfulness) => {
        res.json(mindfulness);
      })
      .catch((err) => {
        console.log('ERROR IN Get one mindfulness', err);
        res.status(400).json({ message: 'something went wrong in find one mindfulness', error: err });
      });
  },
  createMindfulness: (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET); 
    Mindfulness.create({ ...req.body, createdBy: user._id })
      .then((newMindfulness) => {
        res.status(201).json(newMindfulness);
      })
      .catch((err) => {
        console.log('ERROR IN create mindfulness', err);
        res
          .status(400)
          .json({ message: 'something went wrong in create mindfulness', errors: err.errors });
      });
  },
  updateMindfulness: (req, res) => {
    Mindfulness.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((mindfulness) => {
        res.json(mindfulness);
      })
      .catch((err) => {
        console.log('ERROR IN update mindfulness', err);
        res.status(400).json({ message: 'something went wrong in update mindfulness', error: err });
      });
  },
  deleteMindfulness: (req, res) => {
    Mindfulness.deleteOne({ _id: req.params.id })
      .then((mindfulness) => {
        res.json(mindfulness);
      })
      .catch((err) => {
        console.log('ERROR IN delete mindfulness', err);
        res.status(400).json({ message: 'something went wrong in delete mindfulness', error: err });
      });
  },
};