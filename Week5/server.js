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
    maria.query(`INSERT INTO todolist(Content) VALUES ("${req.body.content}")`, function(err, rows) {
      if (!err) { 
        res.status(201).json({
          message: "New item added Successfully",
          itemId: rows.insertId
        });
      } else {
        console.log("error : " + err);
        res.status(400).json({
          error: "Error occurred while adding the item"
        });
      }
    })
  })

  .put((req, res) => {
    const checked = req.body.checked;
    const id = req.body.id;

    maria.query(`UPDATE todolist SET complete=${checked} WHERE Id=${id}`, function(err, rows) {
      if (!err) {
        res.send(rows);
      } else {
        console.log("Error : " + err);
        res.send(err);
      }
    })
  })

  .delete((req, res) => {
    const id = req.body.id;

    maria.query(`DELETE FROM todolist WHERE Id=${id}`, function(err, rows) {
      if (!err) {
        res.send(rows);
      } else {
        console.log("Error : " + err);
        res.send(err);
      }
    })
  });


app.listen(8080, () => {
  console.log(`Server running 8080`);
});