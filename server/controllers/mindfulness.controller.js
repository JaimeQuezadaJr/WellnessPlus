const Mindfulness = require('../models/mindfulness.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const User = require('../models/user.model');


module.exports.findAllMindfulnessGoals = (req, res) => {
    Mindfulness.find({})
        .populate('createdBy', 'email')
        .then((allMindfulnessGoals) => {
            res.json(allMindfulnessGoals)
        })
        .catch((err) => {
            console.log('ERROR IN Get all', err);
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findOneMindfulness = (req, res) => {
    Mindfulness.findOne({_id:req.params.id})
        .then((oneMindfulness) => {
            res.json(oneMindfulness)
        })
        .catch((err) => {
            console.log('ERROR IN Get Mindfulness', err);
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findMindfulnessByUser = (req, res) => {
    console.log('IS THIS WORKING', req.params.email);
    User.findOne({ email: req.params.email }).then((user) => {   //TODO decide whether to keep it until complete front end useState/localstorage
        console.log('USERID', user._id);
        Mindfulness.find({ createdBy: req.params.userId }) //TODO may need to change find parameter (user._id)
        .populate('createdBy', '_id email')
        .then((mindfulness) => {
            res.json(mindfulness);
        })
        .catch((err) => {
            console.log('ERROR', err);
            res.status(400).json({ message: 'something went wrong in find all mindfulness goals', error: err });
        })
})
}

module.exports.createMindfulness = (req, res) => {
    //TODO may needed when implementing JWT
    const user = jwt.verify(req.cookies.userToken, SECRET);
    Mindfulness.create({ ...req.body, createdBy: user._id })
    // Mindfulness.create(req.body)
        .then((newMindfulness) => {
            res.status(201).json(newMindfulness)
        })
        .catch((err) => {
            console.log('ERROR IN create Mindfulness', err);
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
            console.log('ERROR IN update Mindfulness', err);
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