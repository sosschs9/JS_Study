const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const maria = require('./database/connect/maria');
maria.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.route('/api/data')
  .get((req, res) => {
    maria.query('SELECT * FROM todolist', function(err, rows, fields) {
      if (!err) {
        res.send(rows);
      } else {
        console.log("error : " + err);
        res.send(err);
      }
    });
  })

  .post((req, res) => {
    maria.query(`INSERT INTO todolist(Content) VALUES ("${req.body.content}")`, function(err, rows, field) {
      if (!err) { 
        res.send(rows);
      } else {
        console.log("error : " + err);
        res.send(err);
      }
    })
  })

  .delete((req, res) => {

  });


app.listen(8080, () => {
  console.log(`Server running 8080`);
});