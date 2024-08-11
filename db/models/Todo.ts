import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    isDone: { type: Boolean, default: '' },
  },
  { timestamps: true },
);

const Todo = mongoose.models['Todo'] || mongoose.model('Todo', todoSchema);

export default Todo;
