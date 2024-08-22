const express = require("express");
const Connection = require("./database/db");
const app = express();

const PORT = 8888;

Connection();

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});