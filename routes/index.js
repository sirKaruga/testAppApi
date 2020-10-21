var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shope5'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connection successful');
});

/* GET home page. */
router.get("/", (req, res)=>{
  let newindex = 'Y5X9Y09YCE';
  let sql = `SELECT * FROM mains where idindex = 'Y5X9Y09YCE'`;
  let query = db.query(sql, (err, result)=>{
    if (err) {
      throw err;
    }else {
      res.send(result);
      console.log(result);
    }
  });
});

module.exports = router;
