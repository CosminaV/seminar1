let express = require('express');
let router = express.Router();
const Task = require("../models/task"); // este data calea fisierului 

const checkID = (req, res, next)=>{
    //daca exista id si este scris gresit
    if(req.params.id && isNaN(req.params.id)){
        res.status(400).json({"error":"wrong input for ID"})
    } 
    else {
        next();
    }
}

router.route('/getTask/:id').get(checkID, async (req,res)=>{
    //iau task ul respectiv cu id-ul dat ca parametru
    try{
        const task = await Task.findByPk(req.params.id);
        if(task){
            //si afisez task ul
            res.status(200).json(task)
        }
        else{
            res.status(404).json({error: `Task with id ${req.params.id} not found`});
        }
    }
    catch{
        res.status(500).json(error);
    }
})

//ruta pt get
router.route('/getTasks').get(async (req,res) => {
    try{
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    }
    catch (error){
        res.status(500).json(error);
    }
});

//ruta pt add
router.route('/addTask').post(async (req,res)=>{
    try{
        const newTask = await Task.create(req.body);
        res.status(200).json(newTask);
    }
    catch (error){
        res.status(500).json(error);
    }
});

//update
router.route('/modifyTask/:id').put(async (req,res) => {
    try{
        const task = await Task.findByPk(req.params.id);
        if(task){
            const updatedTask = await task.update(req.body);
            res.status(200).json(updatedTask);
        }
        else{
            res.status(404).json({error: `Task with id ${req.params.id} not found`});
        }
    }
    catch(error){
        res.status(500).json(error);
    }
})

router.route('/deleteTask/:id').delete((req,res) => {
    try{
        Task.destroy({
            where: {id: req.params.id} 
        })
        .then((rows) => {
            if (rows === 1){
                res.status(400).json({status: "task was deleted"});
            }
            else{
                res.status(400).json({status: "task was not found"});
            }
        })
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;