const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const http = require('http')

const app = express()

const PORT = config.get('port')

async function start(){

    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        http.createServer(app).listen(PORT, () => console.log(`Port ${PORT} is running!!!`))
    }catch (e){
        console.log('Server error:', e.message)
        process.exit(1)
    }
}

start()