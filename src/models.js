let mongoose = require ('mongoose');

let schema = mongoose.Schema({
    title: {
        type:String
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

let data = mongoose.model('todoObject', schema);

module.exports = data;