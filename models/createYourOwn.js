const mongoose = require('./connection.js');

const createYourOwnSchema = new mongoose.Schema({
    fakeLocation: String,
    fakeMascot: String,
    fakeGameTime: Date,
    fakeStrengths: String,
    fakeWeaknesses: String,
    fakePicture: String
})


const fakeMascotCollection = mongoose.model('fakeMascots', createYourOwnSchema)


//getAll
const getAllFakeMascots = () => {
    return fakeMascotCollection.find({})
}

//getOne
const getOneFakeMascot = (id) => {
    return fakeMascotCollection.findById(id)
}

//update
const updateFakeMascot = (id, newFakeMascot) => {
    return fakeMascotCollection.updateOne({_id: id}, newFakeMascot)
}

//create
const addNewFakeMascot = (newFakeMascot) => {
    return fakeMascotCollection.create(newFakeMascot)
}

//delete
const deleteFakeMascot = (id) => {
    return fakeMascotCollection.deleteOne({_id: id})
}


module.exports = {
    getAllFakeMascots,
    getOneFakeMascot,
    addNewFakeMascot,
    updateFakeMascot,
    deleteFakeMascot
}