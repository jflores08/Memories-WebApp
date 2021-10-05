const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const memorySchema = new Schema({
    title: String,
    tagline: String,
    tags: [String],
    description: String,
    pic: String,
    location: [String],
    radius: Number,
    likeCount: Number,
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAT:{
        type:Date,
        default: new Date()
    }
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;




//username: {
    //type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  //},
  //password: String,