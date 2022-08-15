

const mongoose = require('mongoose');

const FitnessSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: [true, 'Goal is required'],
            minLength: [12, 'Goal description should be more than 12 characters long']
        },
        completedBy: {
            type: Date,
            required: [true, 'Please add goal completion date']
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Fitness = mongoose.model('fitness', FitnessSchema);
module.exports = Fitness;