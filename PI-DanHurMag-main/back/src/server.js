require("dotenv").config();
const { URL } = process.env;
const { users, toDo } = require("./db/index");
const axios = require("axios");
const express = require("express");
const server = express();

// middlewares
srever.use(express.json());

server.get("/", (req, res) => {

})

//users
//async await
server.get("/users", async (req, res) => {
	try {
		const { data } = await axios(`${URL} /users`);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).send(err.cause);
	}
});

//router
server.use("/rickandmorty", router);

module.exports = server

//promesa
// server.get("/users/:id", (req, res) => {
// 	const { id } = req.params;
// 	axios(`${URL}/users`);
// 	res.status(200).json(data);
// 		.then(({ data }) => res.status(200).json(data))
// 		.catch((err) => res.status(500).send(err));
// });

server.post("/", (req, res) => {

})

module.exports = server;