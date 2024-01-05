require("dotenv").config();

const express = require("express")
const { PORT, HOST } = process.env;
const router = require("./routes/index")
const getCharById = require("../controllers/getCharById")
const { headers } = require("./utils/reusable")

const { postFav, deleteFav } = require("../controllers/handleFavorites")
const login = require("../controllers/login")

//con express
const server = express()

//midleware para leer req.body
server.use(express.json())

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

router.get(`/character/:${id}`, getCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("fav/:id", deleteFav)

//usando router
server.use("rickandmorty", router)
//
server.listen(PORT, HOST, function () {
    console.log(`Server listening on port: ${PORT}`);
});