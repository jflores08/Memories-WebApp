const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const memorySchema = new Schema({
    title: String,
    description: String,
    pic: String,
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;




//username: {
    //type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  //},
  //password: String,