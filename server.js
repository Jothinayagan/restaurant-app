const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/rest_test', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('Database connection successful');
});
mongoose.connection.on('error', (err) => {
    console.log('Error in Mongoose connection: \n', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected..!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let product = require("./models/product");

app.post("/addProducts", (req, res) => {
    console.log(req.body);
    product.insertMany(req.body, (err, res) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                status: false,
                message: 'An error occured while creating',
                error: err
            });
        } else {
            console.log("Res ==> ", res);
        }
    })
});

app.get("/showProducts", (req, res) => {
    product.find({}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                status: false,
                message: 'An error occured while creating',
                error: err
            });
        } else {
            console.log("result ====> ", data);
            res.send(data);
        }
    });
});;

// Start server
app.listen(PORT, () => {
    console.log(`Server started and listening at http://localhost:${PORT}`);
});