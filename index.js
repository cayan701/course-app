const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = 

// admin routes 
app.post('/admin/signup', (req, res) => {
    // logic to signup admin
    const admin = req.body; // admin = { username: ayan@gmail.com, pass: 1234 }
    const existingAdmin = ADMINS.find((a) => a.username === admin.username);
    if(existingAdmin) {
        res.status(403).json({ messege: 'Admin already exists' });
    } else {
        ADMINS.push(admin);
        res.json({ messege: 'Admin created successfully' });
    }
});

app.post('/admin/login', adminAuthentication, (req, res) => {
    // logic to auth login

});

app.get('/admin/courses', adminAuthentication, (req, res) => {
    // logic to see courses
});

app.put('/admin/courses/:courseid', adminAuthentication, (req, res) => {

})

// user routes

app.post('/users/signup', (req, res) => {

})

app.post('/users/login', (req, res) => {

})

app.get('/users/courses', (req, res) => {

})

app.post('/users/courses/:courseid', (req, res) => {

})

app.get('/users/purchasedcourses', (req, res) => {

})


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})