import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    userId: { type: String, default: '' },
    isDone: { type: Boolean, default: '' },
    content: { type: String, default: '' },
    deadline: { type: String, default: '' },
  },
  { timestamps: true },
);

const Todo = mongoose.models['Todo'] || mongoose.model('Todo', todoSchema);

export default Todo;
