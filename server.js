const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quizApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schemas
const studentSchema = new mongoose.Schema({
    name: String,
    uniqueID: String,
    district: String,
    school: String,
    teacher: String,
    timestamp: Date,
    grade: Number,
    instantScore: Number,
    standardScore: Number,
    wrongScore: Number
});

const Student = mongoose.model('Student', studentSchema);

// Login endpoint
app.post('/login', async (req, res) => {
    const { name, district, school, teacher } = req.body;
    const uniqueID = Math.random().toString(36).substr(2, 9);
    const newStudent = new Student({ 
        name, 
        uniqueID, 
        district, 
        school, 
        teacher, 
        timestamp: new Date(), 
        grade: 0,
        instantScore: 0,
        standardScore: 0,
        wrongScore: 0
    });
    await newStudent.save();
    res.json({ uniqueID });
});

// Save quiz results
app.post('/saveResult', async (req, res) => {
    const { uniqueID, grade, instantScore, standardScore, wrongScore, name, district, school, teacher } = req.body;
    await Student.findOneAndUpdate(
        { uniqueID },
        { 
            grade, 
            instantScore, 
            standardScore, 
            wrongScore, 
            name,
            district,
            school,
            teacher,
            timestamp: new Date() 
        },
        { upsert: true, new: true }
    );
    res.json({ message: 'Result saved successfully!' });
});

// Get filtered results
app.get('/results', async (req, res) => {
    const { district, school, teacher, uniqueID } = req.query;
    let query = {};
    
    if (district) query.district = district;
    if (school) query.school = school;
    if (teacher) query.teacher = teacher;
    if (uniqueID) query.uniqueID = uniqueID;

    const results = await Student.find(query);
    res.json(results);
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});