const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const userName = req.body.username;
    const password = req.body.password;

    async function createUser(){
        try{
            await User.create({
                username : userName,
                password : password
            })
            res.json({ message: 'User created successfully' });
        }catch{
            res.json({mesasge : "an error occured"})
        }
    }
    createUser();

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
     async function findCourses(){
        const courses = await Course.find();
        res.send(courses);
     }
     findCourses();
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseid = req.params.courseId;
    const userName = req.headers.username;

    
    Course.findOne({_id : courseid},(data,err)=>{
        
    })

    
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router