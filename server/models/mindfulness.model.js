

const mongoose = require('mongoose');

const MindfulnessSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: [true, 'Goal is required'],
            minLength: [12, 'Goal description should be more than 12 characters long']
        },
        completedBy: {
            type: Date,
            required: [true, 'Please add goal completion date'],
            min: Date.now
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

const Mindfulness = mongoose.model('mindfulness', MindfulnessSchema);
module.exports = Mindfulness;