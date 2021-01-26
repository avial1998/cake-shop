const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const Data = [
    { id: 1, name: "Red velvet cake", price: 500 },
    { id: 2, name: "White forest cake", price: 600 },
    { id: 3, name: "Black forest cake", price: 700 },
    { id: 4, name: "Chocolate cake", price: 600 },
    { id: 5, name: "Truffle cake", price: 600 },
  ];

  res.send(Data);
});
app.post("/payment", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).send({ reply: "Success...!!" });
});
app.listen(3000, () => console.log("server started...!"));
