const router = require('express').Router()
const knex = require('./data/dbConfig')

router.get('/', (req, res) => {
    knex.select('*').from('cars')
    .then(cars => {
        if(cars){
            res.status(200).json(cars)
        } else {
            res.status(404).json({message: "There are no cars to display."})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was a problem getting the list of cars."})
    })
})

router.post('/', (req, res) => {
    knex('cars')
    .insert(req.body)
    .then(item => {
        if(item){
            res.status(201).json(item)
        } else {
            res.status(400).json({message: "Please submit the correct information."})
        }
    })
    .catch(err => { 
        console.log(err)
        res.status(500).json({Error: "There was a problem adding a car to the database."})
    })
})

module.exports = router