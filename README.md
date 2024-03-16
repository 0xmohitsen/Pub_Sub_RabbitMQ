# Pub-Sub Implementation with RabbitMQ

This project demonstrates the implementation of the publisher-subscriber (pub-sub) pattern using RabbitMQ, a powerful message broker. The pub-sub pattern enables efficient communication between different components of an application by allowing publishers to send messages to specific topics (exchanges), which are then delivered to all subscribers listening to those topics.

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- RabbitMQ Server installed and running

### Installation

1. Clone the repository to your local machine:

git clone <repository-url>

2. Install project dependencies:

npm install

3. Start the application:

npm start


### Usage

1. Once the application is running, it will utilize RabbitMQ to implement the pub-sub pattern.
2. Publishers can send messages to specific topics (exchanges), while subscribers can listen to those topics to receive messages.
3. Explore the application code to understand how RabbitMQ is integrated for pub-sub functionality.

## Acknowledgments

- RabbitMQ for providing a robust message broker solution
- Node.js community for creating and maintaining the `amqplib` library
