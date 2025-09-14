const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
app.use(express.json());


(async () => {
  try {
    await mongoose.connect("mongodb+srv://hassanjavaidcoder:hassan.92@cluster0.emtxpzn.mongodb.net/LearnMongoose");
    app.listen(PORT , ()=>{
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log('error =>' , error.message)
  }
})()

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    minlength: 3
  },
  userId: {
    type: String,
    required: true,
    minlength: 3
  }
});

const Task = mongoose.model("Task" , taskSchema)


app.post('/addTask', async (req, res) => {
  try {
    const { task, userId } = req.body;
    const newTask = new Task({task: task , userId : userId});
    await newTask.save();

    res.status(200).send({ message: 'Your task has been added successfully!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/deleteTask', async (req, res) => {
  try {
    const { taskId } = req.body;
    const taskToDel = await Task.findOne({ _id: taskId });
    if (!taskToDel) {
      res.status(400).send({ message: 'Task not found' });
      return;
    }

    await Task.deleteOne({ _id: taskId });
    res.status(200).send({ message: 'Task has been successfully deleted' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/updateTask', async (req, res) => {
  try {
    const { taskId, newTask } = req.body;

    const taskToUpdate = await Task.findOne({ _id: taskId });
    if (!taskToUpdate) {
      res.status(400).send({ message: 'Task not found' });
      return;
    }

    await Task.updateOne(
      { _id: taskId },
      { $set: { task: newTask } }
    );

    res.status(200).send({ message: 'Your task has been updated successfully!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/allTasks/:userId' , async (req , res)=>{
  try {
    let userId = req.params.userId;
    let tasks = await Task.find({userId : userId});
    res.status(200).send(tasks)
  } catch (error) {
    res.status(500).send({message: error.message})
  }

})

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

