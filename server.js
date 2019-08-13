// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/recipes_app'
const port = 3001

// Let's connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error Message
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.json())
app.use(express.static('public'))

// Routes
const recipesController = require('./controllers/recipeController.js')
app.use('/recipes', recipesController)

// app.get('/', (req, res) => {
//   res.send('index file!! :)')
// })

app.listen(port, () => {
  console.log('welcome to port:' + port);
})
