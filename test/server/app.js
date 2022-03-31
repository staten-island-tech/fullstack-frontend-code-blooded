// const server = require('http').createServer(app)
// const app = require('express')()
// const io = require('socket.io')(server)

// io.on('connection', (socket) => {
//   console.log(`user ${socket.id} is connected`)

//   socket.on('message', (data) => {
//     socket.broadcast.emit('message:received', data)
//   })
//   socket.on('player', (data) => {
//     socket.local.emit('player:received', data)
//   })

//   socket.on('disconnect', () => {
//     console.log(`user ${socket.id} left.`)
//   })
// })

// server.listen(3000, () => {
//   console.group('Chat server is running on 3000')
// })
