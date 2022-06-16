const express = require('express');
const router = express.Router();
app.use(express.json());


const teachers = [
    {id: 1, name:"leozin", user: "teacher1", passwd: "123"},
    {id: 2, name: "gustavin", user: "teacher2", passwd: "123"},
    {id: 3, name: "rochazin", user: "teacher3", passwd: "123"},
    {id: 4, name: "dieguin", user: "teacher4", passwd: "123"},
]

router.get('/', (req, res) => {
    res.send(teachers);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const teacher = teachers.find(teacher => teacher.id == id);
    if(!teacher){
        res.status(404).json({error: 'Teacher not found'});
    }
    res.json(teacher);
});

router.post('/', (req, res) => {
    const teacher = req.body;
    teacher.id = teachers.length + 1;
    try{
        teachers.push(teacher);
        res.json(teacher);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const teacher = teachers.find(teacher => teacher.id == id);
    if(!teacher){
        res.status(404).json({error: 'Teacher not found'});
    }
    try{
        teachers.splice(teachers.indexOf(teacher), 1);
        res.json(teacher);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const teacher = teachers.find(teacher => teacher.id == id);
    if(!teacher){
        res.status(404).json({error: 'Teacher not found'});
    }
    try{
        teacher.name = req.body.name;
        teacher.user = req.body.user;
        teacher.passwd = req.body.passwd;
        res.json(teacher);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})


module.exports = router;