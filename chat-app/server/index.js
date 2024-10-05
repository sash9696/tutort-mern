const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const socket = require('socket.io');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);


console.log('process.env.MONGO_URI',process.env.MONGO_URI)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error: ', error.message);
        process.exit(1);
    }
}
connectDB();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on Port: ${process.env.PORT}`);
});

const io = socket(server, {
    cors:{
        origin:'http://localhost:5173',
        credentials:true
    }
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve", data.message)
        }
    });

})

//websockets
//full-duplex communication
//two way interactions

//real time data
//chat apps => instant messaging 
//online gaming => real time interations b/w players and game servers
//collaborative tools=> google docs => multiple users can edit docs simultaneously
//financial trading=> live stock price, transactions


//socket io

//polling
//keep making requests in a particular time interval

//real time communication
//fallback options like automatically chooses the best transport method
//event based communication
//automatic reconnection
//community ecosystem
//middleare support
//cross-browser compatible

