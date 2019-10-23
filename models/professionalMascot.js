const mongoose = require('./connection.js');

const professionalMascotSchema = new mongoose.Schema({
    location: String,
    professionalMascot: String,
    professionalGameTime: Date,
    professionalStrengths: String,
    professionalWeaknesses: String,
    professionalPicture: String
})



const professionalMascotCollection = mongoose.model('professionalMascots', professionalMascotSchema)

//getAll
const getAllProfessionalMascots = () => {
    return professionalMascotCollection.find({})
}



//getOne
const getOneProfessionalMascot = (id) => {
    return professionalMascotCollection.findById(id)
}



//update
const updateProfessionalMascot = (id, newProfessionalMascot) => {
    return professionalMascotCollection.updateOne({ _id: id }, newProfessionalMascot)
}

//create
const addNewProfessionalMascot = (newProfessionalMascot) => {
    return professionalMascotCollection.create(newProfessionalMascot)
}

//delete

const deleteProfessionalMascot = (id) => {
    return professionalMascotCollection.deleteOne({ _id: id })
}


module.exports = {
    getAllProfessionalMascots,
    getOneProfessionalMascot,
    addNewProfessionalMascot,
    updateProfessionalMascot,
    deleteProfessionalMascot
}