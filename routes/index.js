const bodyParser = require('body-parser')
const express = require('express')

module.exports = app => {
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());  
    app.use('/laboratorio',require('./laboratoriosRoutes'))
    app.use('/exame',require('./examesRoutes'))
    app.use('/exameLaboratorio',require('./exameLaboratorioRoutes'))
}