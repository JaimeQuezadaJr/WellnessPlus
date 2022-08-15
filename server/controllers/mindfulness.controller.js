const Mindfulness = require('../models/mindfulness.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const User = require('../models/user.model');


module.exports.findAllMindfulnesss = (req, res) => {
    Mindfulness.find()
        .then((allMindfulnesss) => {
            res.json(allMindfulnesss)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findOneMindfulness = (req, res) => {
    Mindfulness.findOne({_id:req.params.id})
        .then((oneMindfulness) => {
            res.json(oneMindfulness)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findMindfulnessByUser = (req, res) => {
  User.findOne({ username: req.params.username }).then((user) => {   //TODO decide whether to keep it until complete front end useState/localstorage
    console.log('USERID', user._id);
    Mindfulness.find({ createdBy: user._id }) //TODO may need to change find parameter (user._id)
      .populate('createdBy', 'username email')
      .then((Mindfulness) => {
        res.json(Mindfulness);
      })
      .catch((err) => {
        res.status(400).json({ message: 'something went wrong in find all Mindfulness', error: err });
      })
      .catch((err) => {
        res.status(400).json({ message: 'something went wrong in find all Mindfulness', error: err });
      });
})
}

module.exports.createNewMindfulness = (req, res) => {
    Mindfulness.create(req.body)
        .then((newMindfulness) => {
            res.status(201).json(newMindfulness)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.updateMindfulness = (req, res) => {
    Mindfulness.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true, runValidators: true}
        )
        .then((updateMindfulness) => {
            res.json(updateMindfulness)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });

}

module.exports.deleteMindfulness = (req,res) => {
    Mindfulness.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({result:result})
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
} 