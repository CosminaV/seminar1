let express = require('express');
let router = express.Router();
const Task = require("../Task");

//cand vom avea baza de dat nu va mai fi aici
const tasks = [ new Task(1, "tema1", true),
new Task(2, "tema2", false),
new Task(3, "tema3", false),
new Task(4, "tema4", false)];

const checkID = (req, res, next)=>{
    //daca exista id si este scris gresit
    if(req.params.id && isNaN(req.params.id)){
        res.status(400).json({"error":"wrong input for ID"})
    } 
    else {
        next();
    }
}

router.route('/getTask/:id').get(checkID, (req,res)=>{
    //iau task ul respectiv cu id-ul dat ca parametru
    const task = tasks.find(task => task.id == req.params.id)
    if(task){
        //si afisez task ul
        res.status(200).json(task)
    }
    else{
        res.status(400).json({error: "task not found!"})
    }
})

//ruta pt get
router.route('/getTasks').get((req,res) => {
    let filteredTasks = [];
    //cautam daca dupa ? avem vreo valoare pt isDone
    if(req.query.isDone){
        //trb transformat in string
        filteredTasks = tasks.filter(task => (task.isDone).toString().toLowerCase() == req.query.isDone);
    }
    else{
        filteredTasks=tasks;
    }
    res.json(filteredTasks);
});

//ruta pt add
router.route('/addTask').post((req,res)=>{
    let task= new Task(req.body.id, req.body.title, req.body.isDone);
    tasks.push(task);
    //afisez doar task-ul pe care il adaug
    res.json(task);
});

//update
router.route('/modifyTask/:id').put((req,res) => {
    let task = tasks.find(task => task.id == req.params.id);

    task.title = req.body.title;
    task.isDone = req.body.isDone;

    //afisez task ul cu valorile actualizate
    res.json(task);
})

router.route('/deleteTask/:id').delete((req,res) => {
    let index = tasks.findIndex(task => task.id == req.params.id);

    tasks.splice(index, 1);

    res.json(tasks);
})

module.exports = router;