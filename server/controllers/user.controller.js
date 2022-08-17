const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
console.log('SECRET', SECRET);

module.exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        const newUser = await user.save();
        console.log('USER CREATED', newUser);
        const userToken = jwt.sign(
            { _id: newUser._id, email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName},
            SECRET,
        );
        console.log('JWT:', userToken);
        res
            .status(201)
            .cookie('userToken', userToken, { expires: new Date(Date.now() + 90000000000) })
            .json({ successMessage: 'user created', user: newUser });
        } catch (error) {
        console.log('Register ERROR', error);
        res.status(400).json(error);
    }
}

module.exports.login = async (req, res) => {
    const userDocument = await User.findOne({ email: req.body.email });
    console.log('USERDOC', userDocument);
    if (!userDocument) {
        res.status(400).json({ error: 'invalid email/password' });
    } else {
        try {
        const isPasswordValid = await bcrypt.compare(req.body.password, userDocument.password);
        if (!isPasswordValid) {
            res.status(400).json({ error: 'invalid email/password' });
        } else {
        const userToken = jwt.sign(
            { _id: userDocument._id, email: userDocument.email, username: userDocument.username },
            SECRET,
        );
        console.log('JWT:', userToken);
        res
            .status(201)
            .cookie('userToken', userToken, { expires: new Date(Date.now() + 900000) })
            .json({ successMessage: 'user loggedin', user: userDocument });
        }
    } catch (error) {
        console.log('LOGIN ERROR', error);
        res.status(400).json({ error: 'invalid email/password' });
        }
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie('userToken');
    res.json({ successMessage: 'User logged out' });
}

module.exports.getLoggedInUser = async (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    User.findOne({ _id: user._id })
        .then((user) => {
            res.json(user);
    })
        .catch((err) => {
            console.log(err);
    });
}

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