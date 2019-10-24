const express = require('express')

const fakeMascotApi = require('../models/createYourOwn.js')

const fakeMascotRouter = express.Router()

fakeMascotRouter.get('/mascot/fake/new', (req, res) => {
    res.render('newFakeMascotForm')
  })
  
  fakeMascotRouter.get('/mascot/fake/edit/:id', (req, res) => {
    fakeMascotApi.getOneFakeMascot(req.params.id)
    .then((oneFakeMascot) => {
      res.render('updateFakeMascotForm', oneFakeMascot)
    })
  })
  
  
  //getAll
  fakeMascotRouter.get('/mascot/fake', (req, res) => {
      fakeMascotApi.getAllFakeMascots()
      .then((allFakeMascots) => {
        res.render('allFakeMascots', {allFakeMascots})
      })
  })
  
  
  //getOne
  fakeMascotRouter.get('/mascot/fake/:id', (req, res) => {
    fakeMascotApi.getOneFakeMascot(req.params.id)
    .then((oneFakeMascot) => {
      res.render('oneFakeMascot', oneFakeMascot)
    })
  })
  
  
  //update
  fakeMascotRouter.put('/mascot/fake/:id', (req, res) => {
    fakeMascotApi.updateFakeMascot(req.params.id, req.body)
    .then((updatedFakeMascot) => {
      res.redirect(`/mascot/fake/${req.params.id}`)
    })
  })
  
  
  //create
  fakeMascotRouter.post('/mascot/fake', (req, res) => {
    fakeMascotApi.addNewFakeMascot(req.body)
    .then((createdFakeMascot) => {
      res.redirect('/mascot/fake')
    })
  })
  
  
  //delete
  fakeMascotRouter.delete('/mascot/fake/:id', (req, res) => {
    fakeMascotApi.deleteFakeMascot(req.params.id)
    .then((deletedFakeMascot) => {
      res.redirect('/mascot/fake')
    })
  })
  
  
  
  module.exports = {
    fakeMascotRouter
  }