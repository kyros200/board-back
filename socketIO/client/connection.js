const connection = (client) => {
    client.on("ping", () => {
        client.broadcast.emit("pong_public")
        client.emit("pong_private")
    });

    client.on('disconnecting', () => {
    console.log(`User DISCONNECTING with ID: ${client.id}`)
    });

    client.on('disconnect', () => {
        console.log(`User DISCONNECTED with ID: ${client.id}`)
    });
}

module.exports = {connection};