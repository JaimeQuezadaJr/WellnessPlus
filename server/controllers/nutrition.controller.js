const Nutrition = require('../models/nutrition.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const User = require('../models/user.model');


module.exports.findAllNutritions = (req, res) => {
    Nutrition.find()
        .then((allNutritions) => {
            res.json(allNutritions)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findOneNutrition = (req, res) => {
    Nutrition.findOne({_id:req.params.id})
        .then((oneNutrition) => {
            res.json(oneNutrition)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findNutritionByUser = (req, res) => {
  // User.findOne({ username: req.params.username }).then((user) => {   //TODO decide whether to keep it until complete front end useState/localstorage
  //   console.log('USERID', user._id);
    Nutrition.find({ createdBy: req.params.userId }) //TODO may need to change find parameter (user._id)
      // .populate('createdBy', '_id email')
      .then((nutrition) => {
        res.json(nutrition);
      })
      .catch((err) => {
        res.status(400).json({ message: 'something went wrong in find all nutrition', error: err });
      })
}

module.exports.createNutrition = (req, res) => {
    //TODO may needed when implementing JWT
    // const user = jwt.verify(req.cookies.userToken, SECRET);
    // Nutrition.create({ ...req.body, createdBy: user._id })
    Nutrition.create(req.body)
        .then((newNutrition) => {
            res.status(201).json(newNutrition)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.updateNutrition = (req, res) => {
    Nutrition.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true, runValidators: true}
        )
        .then((updateNutrition) => {
            res.json(updateNutrition)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });

}

module.exports.deleteNutrition = (req,res) => {
    Nutrition.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({result:result})
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
} 