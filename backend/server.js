const express = require("express");
const dotenv = require("dotenv");
const chats  = require( "./data/data");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server started on ${PORT}`));

