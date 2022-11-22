let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
const router = require('./routes/tasks');
require("dotenv").config(); //imi prmite sa am acces la info din .env


let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

app.use((err, rq, res, next) => {
    res.status(500).json({"ERROR":"General error"})
})

//daca se int ceva cu portul meu din env, vreau sa mi puna automat 8080
app.set("port", process.env.PORT || 8080) 

app.listen(app.get("port"), () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
});

