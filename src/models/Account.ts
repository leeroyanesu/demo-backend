import { type Document, model, Schema } from 'mongoose'
import { type Account } from '../@types'

interface I extends Document, Account {}

const instance = new Schema<I>(
  {
    /*
      document ID is set by default via MongoDB - the next line is deprecated!
      _id: mongoose.Schema.Types.ObjectId,
    */

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Account' === collection: 'accounts'
const modelName = 'Account'

export default model<I>(modelName, instance)
