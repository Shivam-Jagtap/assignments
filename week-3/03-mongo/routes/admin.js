const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes

router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const newUserName = req.body.username;
    const newPassword = req.body.password;

    async function saveNewUser(){
    try {
            await Admin.create({
                    username : newUserName,
                    password : newPassword
                })
            // console.log("Admin created successfully");
            res.send("Admin created successfully")
        }
    catch (error) {
        res.send("Error "+error);
        }
    }
    saveNewUser();
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const user = req.header.username;
    //take info from body to create a new course
    const courseTitle = req.body.title;
    const courseDesc = req.body.description;
    const coursePrice = req.body.price;
    const courseImage = req.body.imageLink;
    
    async function createCourse(){
        try {
            await Course.create({
                title : courseTitle,
                description : courseDesc,
                price : coursePrice,
                imageLink : courseImage,
                published : true
            })
            res.json( { message: 'Course created successfully'});
        } catch (error) {
            res.send(error);
        }
    }
    createCourse();
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    // res.send(
        Course.find().then((data)=>{
            res.send(data);
        })
    // )
});

module.exports = router;