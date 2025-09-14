const { connectToDB } = require('./src/config/database')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const { UserModel } = require('./src/model/user.js')

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new UserModel({ name, email, password });
        await user.save();

        console.log("User has signed up");
        res.send('User has signed up');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred!');
    }
});


    (async function () {
        let db = await connectToDB();
        console.log('Database has connected!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    })()


