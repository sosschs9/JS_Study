const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

const dataFile = "todolist.txt";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.route('/api/data')
  .get((req, res) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).json({ error: 'Error reading file' });
      }
  
      const dataList = data.trim().split('\n');
      res.json(dataList);
      return;
    });
  })

  .post((req, res) => {
    console.log(req.body);
    res.end();
    return;
  })

  .delete((req, res) => {

  });


app.listen(8080, () => {
  console.log(`Server running 8080`);
});