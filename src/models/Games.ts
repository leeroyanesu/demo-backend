import { type Document, model, Schema } from 'mongoose'
import {type Games } from '../@types'

interface I extends Document, Games {}

const instance = new Schema<I>(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    stats: {
      questions: { type: Number, required: true },
      views: { type: Number, required: true },
      users: { type: Number, required: true },
      publised: { type: Boolean, required: true },
      allowed: { type: Boolean, required: true },
    },
  },
  {
    timestamps: true,
  }
)

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Game' === collection: 'game'
const modelName = 'Games'

export default model<I>(modelName, instance)
