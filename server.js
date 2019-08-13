const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3001

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/meancrud'
app.use(express.static('public'))
// app.use(express.json())

// mongoose.connect(mongoURI, { useNewUrlParser: true },
//   () => console.log('MongoDB connection established:', mongoURI)
// )
// mongoose.connection()
app.get('/', (req, res) => {
  res.render('public/index.html')
})

app.listen(port, () => {
  console.log('welcome to port:' + port);
})
