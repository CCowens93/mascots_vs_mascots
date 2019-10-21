
const express = require('express')


const mascotApi = require('../models/mascot.js')


const mascotRouter = express.Router()


mascotRouter.get('/mascot/new', (req, res) => {
  res.render('newCollegeMascotForm')
})

mascotRouter.get('/mascot/edit/:id', (req, res) => {
  mascotApi.getOneCollegeMascot(req.params.id)
  .then((oneCollegeMascot) => {
    res.render('editCollegeMascotForm', oneCollegeMascot)
  })
})


//getAll
mascotRouter.get('/mascot', (req, res) => {
    mascotApi.getAllCollegeMascots()
    .then((allCollegeMascots) => {
      res.render('allCollegeMascots', {allCollegeMascots})
    })
})
//getOne
mascotRouter.get('/mascot/:id', (req, res) => {
  mascotApi.getOneCollegeMascot(req.params.id)
  .then((oneCollegeMascot) => {
    res.render('oneCollegeMascot', oneCollegeMascot)
  })
})
//update
mascotRouter.put('/mascot/:id', (req, res) => {
  mascotApi.updateCollegeMascot(req.params.id, req.body)
  .then((updatedCollegeMascot) => {
    res.redirect(`/mascot/${req.params.id}`)
  })
})
//create
mascotRouter.post('/mascot', (req, res) => {
  mascotApi.addNewCollegeMascot(req.body)
  .then((createdCollegeMascot) => {
    res.redirect('/mascot')
  })
})
//delete
mascotRouter.delete('/mascot/:id', (req, res) => {
  mascotApi.deleteCollegeMascot(req.params.id)
  .then((deletedCollegeMascot) => {
    res.redirect('/mascot')
  })
})





module.exports = {
  mascotRouter
}
