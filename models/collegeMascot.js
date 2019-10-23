const mongoose = require('./connection.js');



const collegeMascotSchema = new mongoose.Schema({
    college: String,
    collegeMascot: String,
    collegeGameTime: Date,
    collegeStrengths: String,
    collegeWeaknesses: String,
    collegePicture: String
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



//update
const updateCollegeMascot = (id, newCollegeMascot) => {
  return collegeMascotCollection.updateOne({_id: id}, newCollegeMascot)
}


//create
const addNewCollegeMascot = (newCollegeMascot) => {
  return collegeMascotCollection.create(newCollegeMascot)
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
  deleteCollegeMascot,
  }