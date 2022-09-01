const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require("./config/key");
const mongoose = require("mongoose");

const PORT = process.env.PROT || 4001

// const http = require('http').createServer(app)

const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.set(__dirname + '/component/header/header.tsx')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "../", "index.html"));
    })
}

// app.use('/api/naverapi', require('./routes/naverapi'))
// app.use('/api/users', require('./routes/users'))
// app.use('/api/board', require('./routes/board'))

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})