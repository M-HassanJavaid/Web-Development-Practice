const express = require('express');
const app = express();
const PORT = 3000;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { connectToDb, disConnectDb } = require("./db.js")
const { authMiddleware } = require('./middleware/middleware.js')
const cors = require('cors')

const cookieParser = require('cookie-parser');

const { ObjectId } = require('mongodb')


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}))

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    let db = await connectToDb();
    let userCollection = db.collection('Users');

    let isUserAlreadySignup = await userCollection.findOne({ email: email });
    console.log(isUserAlreadySignup)

    if (isUserAlreadySignup) {
      res.status(409).send({ message: "You are already regitser, please try to login!" });
      return;
    }

    let userResult = await userCollection.insertOne({
      name: name,
      email: email,
      password: hashPassword,
    })
    
    console.log(userResult.insertedId.toString())
    res.status(201).send({ message: "Congrats! You have successfully signup!" })

  } catch (error) {
    res.status(500).send({ message: error.message })
  } finally {
    await disConnectDb();
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = await connectToDb()
    const userCollection = db.collection('Users');
    const user = await userCollection.findOne({ email: email });

    if (!user) {
      res.status(404).send({ message: "User not found!" });
      return
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log(isPasswordCorrect)

    if (isPasswordCorrect) {

      const JwttakenInfo = {
        id: user._id,
        email: user.email
      }

      const token = jwt.sign(JwttakenInfo, 'hassan.92', {
        expiresIn: '24h'
      });

      delete user.password;

      res.cookie("authToken", token, {
        httpOnly: false,
        secure: false,
        sameSite: "strict"
      });

      res.status(200).send({
        message: 'You have succesfully login to your account!',
        token: token
      });

      return;
    }


    res.status(401).send({ message: 'Your password is incorrect!' })

  } catch (error) {
    res.status(500).send({ message: error.message })
  } finally {
    await disConnectDb()
  }
});

app.get('/logout' , (req , res)=>{
  res.clearCookie("authToken" , {
    httpOnly: false,
    secure: false,
    sameSite: 'strict'
  });

  res.status(200).send({message: 'You have successfully logout!'})
})

app.get('/getTask', authMiddleware, async (req, res) => {
  try {
    let userId = req.user.id;
    const db = await connectToDb();
    let taskCollection = db.collection('tasks');
    let tasks = await taskCollection.find({ userId: userId }).toArray();
    if (!tasks) {
      res.status(400).send({ message: 'No tasks found' });
      return
    }
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({ message: error.message })
  } finally {
    disConnectDb();
  }
});

app.post('/addTask', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId)
    const db = await connectToDb();
    let taskCollection = db.collection('tasks');
    let { task } = req.body;
    await taskCollection.insertOne({
      task: task,
      userId: userId,
    })
    res.status(200).send({ message: 'Your task has added successfully!' })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

app.delete('/deleteTask', authMiddleware, async (req, res) => {
  try {
    const { taskId } = req.body;
    const db = await connectToDb();
    const taskCollection = db.collection('tasks');
    const taskToDel = await taskCollection.findOne({ _id: new ObjectId(taskId) });
    if (!taskToDel) {
      res.status(400).send({ message: 'Task not found' });
      return;
    }

    if (taskToDel.userId != req.user.id) {
      res.status(401).send({ message: 'You are unauthorized user!' });
      return;
    }
    await taskCollection.deleteOne({ _id: new ObjectId(taskId) });
    res.status(200).send({ message: 'Task has successfully deleted' });

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

app.put('/update', authMiddleware, async (req , res) => {
  const { taskId, newTask } = req.body;
  const db = await connectToDb();
  const taskCollection = db.collection('tasks');
  const taskToUpdate = await taskCollection.findOne({ _id: new ObjectId(taskId) });
  if (!taskToUpdate) {
    res.status(400).send({ message: 'Task not found' });
    return;
  }

  if (taskToUpdate.userId != req.user.id) {
    res.status(401).send({ message: 'You are unauthorized user!' });
    return;
  }

  let updatedResult = await taskCollection.updateOne({ _id: new ObjectId(taskId)}, { $set: { task: newTask } });
  console.log(updatedResult)
  res.status(200).send({message: 'Your task has updated successfully!'})

})


// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


