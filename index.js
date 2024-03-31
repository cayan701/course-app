const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => { 
    const { username, password } = req.headers;
    console.log('control here');
    console.log(username);
    console.log(password);
    const admin = ADMINS.find((a) => a.username === username && a.password === password);
    if(admin) {
        next();
    } else {
        res.status(403).json({ messege: 'Auth failed' });
    }
}

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
    res.json({ messege: 'Admin logged in sucessfully' });
});

app.get('/admin/courses', adminAuthentication, (req, res) => {
    // logic to see courses
});

app.put('/admin/courses/:courseid', adminAuthentication, (req, res) => {

});

// user routes
app.post('/users/signup', (req, res) => {

});

app.post('/users/login', (req, res) => {

});

app.get('/users/courses', (req, res) => {

});

app.post('/users/courses/:courseid', (req, res) => {

});

app.get('/users/purchasedcourses', (req, res) => {

})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})