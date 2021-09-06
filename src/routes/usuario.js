/*
    Rutas de usuarios 
host + /api/usuario

*/

const { Router } = require("express");

const router = Router();

const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} = require("../controllers/usuario");

router.get("/", getUsers);

router.post("/new", createUser);

router.delete("/delete", deleteUser);

router.post("/update", updateUser);

module.exports = router;
