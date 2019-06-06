const express = require("express");
const gamedig = require("gamedig");

const app = express();

app.get("/", (req, res) => {
  if ("host" in req.query && "port" in req.query) {
    const host = req.query.host;
    const port = req.query.port;
    return gamedig.query({
      type: "arma3",
      host: host,
      maxAttempts: 3,
      socketTimeout: 10000
    })
      .then(state => {
        res.status(200).json({...state, status: true});
      })
      .catch(error => {
        console.log(error)
        res.status(200).json({status: false});
      });
  }
  return res.status(400).json({error: "Host or port not set"});
});

app.listen(3000, () => {
  console.log("server started http://localhost:3000")
});
