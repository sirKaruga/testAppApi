const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
//app.use(cors());

app.get('/', (req, res)=> {
  res.send("<h1>encryption protocol</h1>");
});

app.get('/users', (req, res)=>{
  axios.get('http://localhost:3000/try')
  .then(response=>{
    res.send(response.data);
  });
});


module.exports=app;

// router.get("/tes", async (req, res, next) => {
//   console.log("'/' call");
//   try {
//     const res = await axios.get("https://api.neoscan.io/api/main_net/v1/get_all_nodes");
//     res.json(data);
//   }
//   catch (err) {
//     next(err)
//   }
// })
