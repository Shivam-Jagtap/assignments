const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://hkirats_cohort:6O0kPbJA4gihV4EJ@cluster0.aau4iwh.mongodb.net/').then(()=>{console.log("connected with the database")});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: Number,
    title: String, 
    description: String, 
    price: Number, 
    imageLink: String, 
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}