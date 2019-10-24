const express = require('express')

const collegeMascotApi = require('../models/collegeMascot.js')

const collegeMascotRouter = express.Router()


collegeMascotRouter.get('/mascot/college/new', (req, res) => {
  res.render('newCollegeMascotForm')
})

collegeMascotRouter.get('/mascot/college/edit/:id', (req, res) => {
  collegeMascotApi.getOneCollegeMascot(req.params.id)
  .then((oneCollegeMascot) => {
    res.render('updateCollegeMascotForm', oneCollegeMascot)
  })
})


//getAll
collegeMascotRouter.get('/mascot/college', (req, res) => {
    collegeMascotApi.getAllCollegeMascots()
    .then((allCollegeMascots) => {
      res.render('allCollegeMascots', {allCollegeMascots})
    })
})


//getOne
collegeMascotRouter.get('/mascot/college/:id', (req, res) => {
  collegeMascotApi.getOneCollegeMascot(req.params.id)
  .then((oneCollegeMascot) => {
    res.render('oneCollegeMascot', oneCollegeMascot)
  })
})


//update
collegeMascotRouter.put('/mascot/college/:id', (req, res) => {
  collegeMascotApi.updateCollegeMascot(req.params.id, req.body)
  .then((updatedCollegeMascot) => {
    res.redirect(`/mascot/college/${req.params.id}`)
  })
})


//create
collegeMascotRouter.post('/mascot/college', (req, res) => {
  collegeMascotApi.addNewCollegeMascot(req.body)
  .then((createdCollegeMascot) => {
    res.redirect('/mascot/college')
  })
})


//delete
collegeMascotRouter.delete('/mascot/college/:id', (req, res) => {
  collegeMascotApi.deleteCollegeMascot(req.params.id)
  .then((deletedCollegeMascot) => {
    res.redirect('/mascot/college')
  })
})



module.exports = {
  collegeMascotRouter
}
