var express = require('express')
var socket = require('socket.io')
app = express()

var server = app.listen(5000, ()=>{
    console.log("app is running on port: 5000")
})

app.use(express.static('public'))

var io = socket(server)

io.on('connection',(socket)=>{
    console.log("socket connection made!!!",socket.id)
    socket.on('chat',(data)=>{
        io.sockets.emit('chat', data)
    })
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })
})