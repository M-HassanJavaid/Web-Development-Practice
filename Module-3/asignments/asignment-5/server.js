const express = require('express');
const app = express();
const PORT = 3000;
const { connectToDb, disConnectDb } = require("./db.js");
const { ObjectId } = require('mongodb');

app.use(express.json());

let taskCollection;

(async () => {
  try {
    let db = await connectToDb();
    taskCollection = db.collection('tasks')
    app.listen(PORT , ()=>{
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error.message)
  }
})();



app.post('/addTask', async (req, res) => {
  try {
    const { task, userId } = req.body;
    await taskCollection.insertOne({ task, userId });

    res.status(200).send({ message: 'Your task has been added successfully!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/deleteTask', async (req, res) => {
  try {
    const { taskId } = req.body;
    const taskToDel = await taskCollection.findOne({ _id: new ObjectId(taskId) });
    if (!taskToDel) {
      res.status(400).send({ message: 'Task not found' });
      return;
    }

    await taskCollection.deleteOne({ _id: new ObjectId(taskId) });
    res.status(200).send({ message: 'Task has been successfully deleted' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/updateTask', async (req, res) => {
  try {
    const { taskId, newTask } = req.body;

    const taskToUpdate = await taskCollection.findOne({ _id: new ObjectId(taskId) });
    if (!taskToUpdate) {
      res.status(400).send({ message: 'Task not found' });
      return;
    }

    await taskCollection.updateOne(
      { _id: new ObjectId(taskId) },
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
    let tasks = await taskCollection.find({userId : userId}).toArray();
    res.status(200).send(tasks)
  } catch (error) {
    res.status(500).send({message: "Internal server error!"})
  }

})

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start server

