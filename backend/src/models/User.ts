import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

//interface para utilizar o bcrypt corretamente
export interface IUser extends mongoose.Document {
  password: string
}

//esquema de usuário com dados do modal e o toDo list
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  pomodoro: {
    type: Number,
    default: 25
  },
  pausaCurta: {
    type: Number,
    default: 5
  },
  pausaLonga: {
    type: Number,
    default: 15
  },
  Tarefas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tarefa'
    }
  ]
})

//função para encriptação da senha
UserSchema.pre<IUser>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  
  next()
})

//criação do modelo baseado no Schema UserSchema
const User = mongoose.model('User', UserSchema)

export default User
