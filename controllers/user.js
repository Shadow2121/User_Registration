const { get } = require('mongoose')
const Task = require('../models/user')

const getAllUsers = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json(error)
    }
}

const createUser = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        console.log(req.body);
        res.status(500).json({error})
    }
}

const getUser = async (req, res) => {
    try {
        const { id:taskID } = req.params
        const task = await Task.findOne({ _id:taskID})
        if (!task){
            return res.status(404).json({ msg : 'Data is not available for this id'})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json(error)
    }
}

const upgradeUser = async (req, res) => {
    try {
        const { id:taskID } = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, { runValidators:true, new:true})
        if (!task){
            return res.status(404).json({ msg : 'Data is not available for this id'})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id:taskID } = req.params
        const task = await Task.findOneAndDelete({ _id:taskID })        
        if (!task){
            return res.status(404).json({ msg : 'Data is not available for this id'})
        }
        res.status(200).send({ deleted : task})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllUsers, getUser, createUser, upgradeUser, deleteUser
}