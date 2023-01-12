const {Server} = require('socket.io');
const { connection } = require('./client/connection')

const startIO = (server) => {
    const io = new Server(server, {
        cors: {
            origin: `http://localhost:3000`
        }
    });
    
    io.on("connection", (client) => {
        console.log(`User Connected with ID: ${client.id}`)

        connection(client)
    });

}

module.exports = {startIO};