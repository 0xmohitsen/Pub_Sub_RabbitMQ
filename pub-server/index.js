const express = require('express');
const amqplib = require('amqplib');

const dotnev = require('dotnev');
dotnev.config();

const PORT = process.env.PORT;

async function connectQueue(){
    try {
        //first make connection with rabbitMQ server
        const connection = await amqplib.connect("amqp://localhost");
        // channel are created for making multiple services connection smooth with rabbitMQ
        const channel = await connection.createChannel();

        // create a queue 
        await channel.assertQueue("noti-queue");

        // send a msg into the msgQueue
        await channel.sendToQueue("noti-queue", Buffer.from('Sending one more msg into msgQueue'));
    } catch (error) {
        console.log(error);
    }
}

const app = express();

app.listen(PORT, async () => {
    console.log(`Server is running on PORT:${PORT}`);
    await connectQueue();
    console.log("Queue connected");
});