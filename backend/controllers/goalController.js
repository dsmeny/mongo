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
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedGoal)
}

const deleteGoals = async(req, res) => {
    const goal = await Goal.findByIdAndDelete(req.params.id)

    if(!goal){
        res.status(400);
        throw new Error('Goal not found')
    }
    res.json(goal)
}

module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}