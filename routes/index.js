var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var nodemailer = require('nodemailer');



/* GET home page. */
router.get("/", (req, res)=>{

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


  let dressSql = `SELECT * FROM mains where cat = 'clothingsAndFash'`;
  let dressQuery = db.query(dressSql, (err, result)=>{
    if (err) {
      throw err;
    }else {
      res.send(result);
    }

  });
});

router.get("/mailer", (req, res)=>{
  console.log("mailer accessed");
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tonnydennis443@gmail.com',
    pass: '1803443kd'
  }
});

var mailOptions = {
  from: 'hgjmer',
  to: 'tonnydennis443@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.send('Email sent: ' + info.response);
  }
});
});

// -------------------------------------------------------------------------------------------------------------

router.post("/regster", (req, res)=>{

  var data = req.body

  var totalData = {
    data: data,
     comment: "<br><p>You are Receiving this Mail because You are an Official GoodMail Staff</p>",
  };

    var ready = JSON. stringify(totalData);

  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tonnydennis443@gmail.com',
    pass: '1803443kd'
  }
  });

  var mailOptions = {
  from: 'GoodMail',
  to: 'tonnydennis443@gmail.com, dorothytoroitich@gmail.com, pcmomanyi@gmail.com',
  subject: 'New User Registered By GoodMail',
  text:  ready,
  };

// for subscriber
  var mailOptions2 = {
  from: 'Goodmail',
  to: req.body.email,
  subject: 'GoodMail Registration Successful',
  text:  "This is to confirm That your Site has been successfully registered with us",
  };

  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  }
  });

  // res.send('Email sent: ' + info.response);
  transporter.sendMail(mailOptions2, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.send('Email sent: ' + info.response);
  }
  });
  // sent to subscriber







});

module.exports = router;
