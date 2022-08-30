# WellnessPlus
WellnessPlus is a JavaScript-based app for tracking your wellness goals.

## Features
* Goals are catagorized to nutrition, fitness and mindfulness.
* Toggle complete status of goals.
* Add, update and delete goals.
* Login system to allow multi-user use and privacy of personal information

## Technical Overview
This project is built with React.js front-end, Express.js and Mongoose back-end and MongoDB as the database.

### Installation
This application can be run locally after cloning the application onto your computer.  
MongoDB has to be installed prior running the application. We used MongoDB community version 5.0 server for development.

We uses several libraries which can be installed by npm. Dependencies are required to be installed separately for frontend and backend.
* to install dependencies for frontend
```bash
$ cd client
$ npm install
```
* to install dependencies for backend
```bash
$ cd server
$ npm install
```
.env file is required to be created for the backend to store JSON Web Token secret key and port number for MongoDB server.
* example .env file
```env
PORT=8000   #default port number for mongoDB/mongoose
JWT_SECRET=yourjwtsecretykey
```

### Start running locally
The frontend and backend will be run on two different port. MongoDB server needs to be turned on before running the application.
* to start running frontend, by default on `http://localhost:3000`
```bash
$ cd client
$ npm start
```
* to start running backend, by default on `http://localhost:8000`
```bash
$ cd server
$ nodemon server.js
```
