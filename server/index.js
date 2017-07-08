const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();



mongoose.Promise = global.Promise;
// API endpoints go here!
const {router: userRouter} = require('./users/router')

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/users', userRouter)

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
  mongoose.connect('mongodb://localhost:27017/simple-api')
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
