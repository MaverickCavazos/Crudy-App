const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const mysql = require('mysql')
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1nnd90MR$!',
    database: 'crud_app_db'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const sqlGet = "SELECT * FROM gameTable"

    db.query(sqlGet, (err, results) =>{
        res.send(results)

    })
})


app.post('/api/insert', (req, res)=> {
    
    const gameName = req.body.gameName;
    const gameReview = req.body.gameReview;

    const sqlInsert = "INSERT INTO gameTable (gameName, gameReview) VALUES (?,?)"
    
    db.query(sqlInsert, [gameName, gameReview], (err, results) =>{
        console.log(err)

    })
});


app.listen(3001, () => {
    console.log('server is running on port 3001')
});