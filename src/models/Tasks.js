import mongoose from 'mongoose'
const {Schema} = mongoose;

const schemaTask =  new Schema({
    title: {type: String},
    description: {type: String}
})

module.exports = mongoose.model('tasks', schemaTask);