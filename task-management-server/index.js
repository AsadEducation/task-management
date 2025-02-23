const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors({

    origin: [
        'http://localhost:5173',
        'https://task-management-pink-omega.vercel.app',
    ],

    credentials: true

}));
app.use(express.json());
// app.use(cookieParser());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ueh5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        //created food collection and food database 

        const TaskManagement = client.db('TaskManagement');
        const taskCollection = TaskManagement.collection('Tasks');


        // getting all task api

        app.get('/tasks', async (req, res) => {

            
        })


        //task add api

        app.post('/add-food', async (req, res) => {
            // console.log(req.body)

            const addedFood = req.body;

            const result = await foodCollection.insertOne(addedFood);

            res.send(result);

        })

        //task update api

        app.put(`/add-food/:id`, async (req, res) => {

            const id = req.params.id;
            const updatedFood = req.body;

            const filter = { _id: new ObjectId(id) };

            const options = { upsert: true };

            const updateDoc = {

                $set: updatedFood
            }

            const result = await foodCollection.updateOne(filter, updateDoc, options);

            res.send(result);

        })

        //task delete api

        app.delete('/available-foods/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: new ObjectId(id) }
            const result = await foodCollection.deleteOne(query);

            res.send(result);

        })



    } finally {

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello Server ')
})

app.listen(port, () => {
    console.log(`server is running properly at : ${port}`);
})