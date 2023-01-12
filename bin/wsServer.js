const io = require("socket.io")(httpServer, {
    cors: {
      origin: "https://example.com",
      methods: ["GET", "POST"]
    }
});

httpServer.listen(8000);
console.log("server started!")

io.on("connection", (socket) => {
    // send a message to the client
    socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

    // receive a message from the client
    socket.on("hello from client", (...args) => {
        // ...
    });
});