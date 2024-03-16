const express = require('express');
const amqplib = require('amqplib');

const dotnev = require('dotnev');
dotnev.config();

const PORT = process.env.PORT;

async function connectQueue(){
    try {
        const connection = await amqplib.connect("amqp://localhost");

        const channel = await connection.createChannel();

        await channel.assertQueue("noti-queue");

        channel.consume("noti-queue", (data) => {
            console.log(`${Buffer.from(data.content)}`);
            
            channel.ack(data);
        })
    } catch (error) {
        
    }
}
const app = express();

app.listen(PORT, async () => {
    console.log(`Server is running on PORT:${PORT}`);
    await connectQueue();
    console.log('Queue is up');
});
