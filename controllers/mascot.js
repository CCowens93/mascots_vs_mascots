
const express = require('express')


const mascotApi = require('../models/mascot.js')


const mascotRouter = express.Router()


//getAll
mascotRouter.get('/mascot', (req, res) => {
    mascotApi.getAllCollegeMascots()
    .then((allCollegeMascots) => {
      res.render('allCollegeMascots', {allCollegeMascots})
    })
})
//getOne
mascotRouter.get('/mascot/:id', (req, res) => {
  mascotApi.getIssue(req.params.id)
  .then((oneCollegeMascot) => {
    res.render('oneCollegeMascot', oneCollegeMascot)
  })
})
//create
mascotRouter.post('/mascot', (req, res) => {
  mascotApi.addNewIssue(req.body)
  .then((createdCollegeMascot) => {
    res.redirect('/mascot')
  })
})
//update
mascotRouter.put('/mascot/:id', (req, res) => {
  mascotApi.updateCollegeMascot(req.params.id, req.body)
  .then((updatedCollegeMascot) => {
    res.redirect(`/mascot/${req.params.id}`)
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
