const express = require('express')

const landingApi = require('../models/landing.js')

const landingRouter = express.Router()


landingRouter.get('/', (req, res) => {
    res.render('landing')
})

module.exports = {
    landingRouter
}