const Task = require('../models/Tasks')

export const getTasks = async (req, res) =>{
    const data = await Task.find();
    res.json(data)
}

export const getTask = async (req, res) =>{
    const data = await Task.findById(req.params.id)
    res.json(data)
}

export const addTask = async (req, res) =>{
    const task = new Task(req.body);
    task.save();
    res.json('Agregado')
}

export const deleteTask = async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id)
    res.json('Eliminado')
}
export const updateTask = async (req, res) =>{
    const {title, description} = req.body
    await Task.findByIdAndUpdate(req.params.id, {title, description})
    res.json('Actualizado')
}