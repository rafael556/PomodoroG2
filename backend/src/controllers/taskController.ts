import Tarefa from '../models/Tarefa';

exports.createTask = async (req, res) => {
  try{
    const task = await Tarefa.create({...req.body, user: req.userId})
    return res.json(task)

  } catch(err){
    return res.status(400).send({Error: "Failed creating task"})
  }
}

exports.listTask = async (req, res) => {
  try{
    const task = await Tarefa.find({user: req.userId}).populate('user')
    return res.json(task)

  } catch(err) {
    return res.status(400).send({error: "Tasks not found"})
  }
}

exports.updateTask = async (req, res) => {
  try{
    const task = await Tarefa.findByIdAndUpdate(req.params.id, req.body).populate('user')
    return res.json(task)
  }catch(err){
    return res.status(400).send({error: 'failed to update task'})
  }
}

exports.deleteTask = async (req, res) => {
  try{
    const task = await Tarefa.findByIdAndRemove(req.params.id).populate('user')

    return res.send()
  } catch(err){
    return res.status(400).send({error: "failed to delete task"})
  }
}