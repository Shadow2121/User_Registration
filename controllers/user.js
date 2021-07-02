const { get } = require('mongoose')
const User = require('../models/user')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ success:true, users })
    } catch (error) {
        res.status(500).json(error)
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ success:true, user })
    } catch (error) {
        console.log(req.body);
        res.status(500).json({error})
    }
}

const getUser = async (req, res) => {
    try {
        const { id:userID } = req.params
        const user = await User.findOne({ _id:userID})
        if (!user){
            return res.status(404).json({ msg : `Data is not available for the id : ${userID}`})
        }
        res.status(200).json({ success:true, user })
    } catch (error) {
        res.status(500).json(error)
    }
}

const upgradeUser = async (req, res) => {
    try {
        const { id:userID } = req.params
        const user = await User.findOneAndUpdate({_id:userID}, req.body, { runValidators:true, new:true})
        if (!user){
            return res.status(404).json({ msg : `Data is not available for the id : ${userID}`})
        }
        res.status(200).json({ success:true, user })
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id:userID } = req.params
        const user = await User.findOneAndDelete({ _id:userID })        
        if (!user){
            return res.status(404).json({ msg : `Data is not available for the id : ${userID}`})
        }
        res.status(200).send({ success: true, deleted : user })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllUsers, getUser, createUser, upgradeUser, deleteUser
}