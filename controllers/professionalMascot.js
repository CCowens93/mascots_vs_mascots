const express = require('express')


const professionalMascotApi = require('../models/professionalMascot.js')


const professionalMascotRouter = express.Router()


professionalMascotRouter.get('/mascot/professional/new', (req, res) => {
    res.render('newProfessionalMascotForm')
})

professionalMascotRouter.get('/mascot/professional/edit/:id', (req, res) => {
    professionalMascotApi.getOneProfessionalMascot(req.params.id)
        .then((oneProfessionalMascot) => {
            res.render('updateProfessionalMascot', oneProfessionalMascot)
        })
})

//getAll
professionalMascotRouter.get('/mascot/professional', (req, res) => {
    professionalMascotApi.getAllProfessionalMascots()
        .then((allProfessionalMascots) => {
            res.render('allProfessionalMascots', { allProfessionalMascots })
        })
})


//getOne
professionalMascotRouter.get('/mascot/professional/:id', (req, res) => {
    professionalMascotApi.getOneProfessionalMascot(req.params.id)
        .then((oneProfessionalMascot) => {
            res.render('oneProfessionalMascot', oneProfessionalMascot)
        })
})

//update
professionalMascotRouter.put('/mascot/professional/:id', (req, res) => {
    professionalMascotApi.updateProfessionalMascot(req.params.id, req.body)
        .then((updatedProfessionalMascot) => {
            res.redirect(`/mascot/professional/${req.params.id}`)
        })
})

//create
professionalMascotRouter.post('/mascot/professional', (req, res) => {
    professionalMascotApi.addNewProfessionalMascot(req.body)
        .then((createdProfessionalMascot) => {
            res.redirect('/mascot/professional')
        })
})

//delete
professionalMascotRouter.delete('/mascot/professional/:id', (req, res) => {
    professionalMascotApi.deleteProfessionalMascot(req.params.id)
        .then((deletedProfessionalMascot) => {
            res.redirect('/mascot/professional')
        })
})

module.exports = {
    professionalMascotRouter
}