//运动员model
import { Schema, model } from 'mongoose';
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  age: Number,
  position: String,
  team: String,
  image: String,
  avatar: String,
  score: Number,
  ranks: Number,
  country: String,
}, {
  timestamps: true,
});
export default model('Player', PlayerSchema);