//import our dependencies
const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");

//configure environment variables
dotenv.config();

//cors and ejs

//create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//Aesthetics
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Question 1 - Retrieve all patients
app.get('', (req, res) => {
    const getPatients = "SELECT * FROM patients"
    db.query(getPatients, (err, data) => {
        if(err){
            return res.status(400).send("Failed to get patients", err)
        }

        res.status(200).send(data)
    })
})


//Question 2 - Retrieve all providers
app.get('', (req, res) => {
    const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers"
    db.query(getProviders, (err, data) => {
        if(err){
            return res.status(400).send("Failed to get providers", err)
        }

        res.status(200).send(data)
    })
})

//Question 3 - Filter patients by first name
app.get('', (req, res) => {
    const firstName = "SELECT first_name FROM patients"
    db.query(firstName, (err, data) => {
        if(err){
            return res.status(400).send("Failed to get first name", err)
        }

        res.status(200).send(data)

    })
})

//Question 4 - Retrieve all providers by their specialty
app.get('', (req, res) => {
    const providerSpecialty = "SELECT provider_specialty FROM providers"
    db.query(providerSpecialty, (err, data) => {
        if(err){
            return res.status(400).send("Failed to get provider specialty", err)
        }

        res.status(200).send(data)

    })
})

//start and listen to the server
app.listen(3300, () => {
    console.log("Server is running on port 3300...")
})