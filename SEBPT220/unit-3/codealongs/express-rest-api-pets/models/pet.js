// 1.Create the pet schema
const mongoose = require('mongoose');

// 2.define the pet schema
const petSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
    }, 
    breed: String,
})

// 3.register the pet schema using mongoose.model()
const Pet = mongoose.model('Pet', petSchema);

// 4. export the model 
module.exports = Pet;