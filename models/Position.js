const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    cost: {
        type: Number,
        require: true,
    },
    category: {
        ref: 'Category',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
});

module.exports =  mongoose.model('Position', positionSchema);