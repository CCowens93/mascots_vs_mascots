
const express = require('express')


const collegeMascotApi = require('../models/collegeMascot.js')


const collegeMascotRouter = express.Router()





collegeMascotRouter.get('/mascot/new/college', (req, res) => {
  res.render('newCollegeMascotForm')
})



collegeMascotRouter.get('/mascot/edit/:id', (req, res) => {
  collegeMascotApi.getOneCollegeMascot(req.params.id)
  .then((oneCollegeMascot) => {
    res.render('updateCollegeMascotForm', oneCollegeMascot)
  })
})


//getAll
collegeMascotRouter.get('/mascot', (req, res) => {
    collegeMascotApi.getAllCollegeMascots()
    .then((allCollegeMascots) => {
      res.render('allCollegeMascots', {allCollegeMascots})
    })
})


//getOne
collegeMascotRouter.get('/mascot/:id', (req, res) => {
  collegeMascotApi.getOneCollegeMascot(req.params.id)
  .then((oneCollegeMascot) => {
    res.render('oneCollegeMascot', oneCollegeMascot)
  })
})


//update
collegeMascotRouter.put('/mascot/:id', (req, res) => {
  collegeMascotApi.updateCollegeMascot(req.params.id, req.body)
  .then((updatedCollegeMascot) => {
    res.redirect(`/mascot/${req.params.id}`)
  })
})


//create
collegeMascotRouter.post('/mascot', (req, res) => {
  collegeMascotApi.addNewCollegeMascot(req.body)
  .then((createdCollegeMascot) => {
    res.redirect('/mascot')
  })
})


//delete
collegeMascotRouter.delete('/mascot/:id', (req, res) => {
  collegeMascotApi.deleteCollegeMascot(req.params.id)
  .then((deletedCollegeMascot) => {
    res.redirect('/mascot')
  })
})



module.exports = {
  collegeMascotRouter
}
