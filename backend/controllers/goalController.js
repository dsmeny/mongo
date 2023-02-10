const Goal = require('../models/goalModel')

const getGoals = async(req, res) => {
    const goals = await Goal.find();

    res.json({goals})
}

const postGoals = async(req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({text: req.body.text})
    res.json(goal)
}

const putGoals = async(req, res) => {
    res.json({message: `Update goal ${req.params.id}`})
}

const deleteGoals = async(req, res) => {
    res.json({message: `Update goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}