const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  status: { type: String, enum: ['Completed', 'Pending'], default: 'Pending' },
});

module.exports = mongoose.model('Task', TaskSchema);
