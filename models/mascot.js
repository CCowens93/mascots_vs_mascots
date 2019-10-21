const mongoose = require('./connection.js');

const collegeMascotSchema = new mongoose.Schema({
    college: String,
    mascot: String,
    gameTime: Date,
    strengths: String,
    weaknesses: String,
})

const collegeMascotCollection = mongoose.model('collegeMascots', collegeMascotSchema)


//getAll
const getAllCollegeMascots = () => {
  return collegeMascotCollection.find({})
}

//getOne
const getOneCollegeMascot = (id) => {
  return collegeMascotCollection.findById(id)
}

//create
const addNewCollegeMascot = (newCollegeMascot) => {
  return collegeMascotCollection.create(newCollegeMascot)
}

//edit
const updateCollegeMascot = (id, newCollegeMascot) => {
  return collegeMascotCollection.updateOne({_id: id}, newCollegeMascot)
}

//delete
const deleteCollegeMascot = (id) => {
  return collegeMascotCollection.deleteOne({_id: id})
}






module.exports = {
  getAllCollegeMascots,
  getOneCollegeMascot,
  addNewCollegeMascot,
  updateCollegeMascot,
  deleteCollegeMascot
}
