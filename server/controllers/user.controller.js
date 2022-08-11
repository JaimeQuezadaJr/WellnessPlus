const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.findOneUser = (req, res) => {
    User.findOne({_id:req.params.id})
        .then((oneUser) => {
            res.json(oneUser)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then((newUser) => {
            res.status(201).json(newUser)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true, runValidators: true}
        )
        .then((updateUser) => {
            res.json(updateUser)
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });

}

module.exports.deleteUser = (req,res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({result:result})
        })
        .catch((err) => {
            res.status(400).json({message: 'Something went wrong', error:err})
        });
} 