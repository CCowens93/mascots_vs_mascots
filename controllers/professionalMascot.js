const express = require('express')


const professionalMascotApi = require('../models/professionalMascot.js')


const professionalMascotRouter = express.Router()


professionalMascotRouter.get('/mascot/new/professional', (req, res) => {
    res.render('newProfessionalMascotForm')
})

professionalMascotRouter.get('/mascot/edit/:id', (req, res) => {
    professionalMascotApi.getOneProfessionalMascot(req.params.id)
        .then((oneProfessionalMascot) => {
            res.render('updateProfessionalMascotForm', oneProfessionalMascot)
        })
})
//getAll
professionalMascotRouter.get('/mascot', (req, res) => {
    professionalMascotApi.getAllProfessionalMascots()
        .then((allProfessionalMascots) => {
            res.render('allProfessionalMascots', { allProfessionalMascots })
        })
})


//getOne
professionalMascotRouter.get('/mascot/:id', (req, res) => {
    professionalMascotApi.getOneProfessionalMascot(req.params.id)
        .then((oneProfessionalMascot) => {
            res.render('oneProfessionalMascot', oneProfessionalMascot)
        })
})

//update
professionalMascotRouter.put('/mascot/:id', (req, res) => {
    professionalMascotApi.updateProfessionalMascot(req.params.id, req.body)
        .then((updatedProfessionalMascot) => {
            res.redirect(`/mascot/${req.params.id}`)
        })
})

//create
professionalMascotRouter.post('/mascot', (req, res) => {
    professionalMascotApi.addNewProfessionalMascot(req.body)
        .then((createdProfessionalMascot) => {
            res.redirect('/mascot')
        })
})

//delete
professionalMascotRouter.delete('/mascot/:id', (req, res) => {
    professionalMascotApi.deleteProfessionalMascot(req.params.id)
        .then((deletedProfessionalMascot) => {
            res.redirect('/mascot')
        })
})

module.exports = {
    professionalMascotRouter
}