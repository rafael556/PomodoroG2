import mongoose, {Schema} from "mongoose";

const TarefaSchema = new Schema({
  Description: {
    type: String,
    required: true
  },
  QtdPomo: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  completed: {
    type: Boolean,
    require: true,
    default: false
  }
})

const Tarefa = mongoose.model('Tarefa', TarefaSchema)

export default Tarefa