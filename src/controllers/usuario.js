const { response } = require("express");
const Usuario = require("../models/PostUser");

const createUser = async (req, res = response) => {
  const {
    nombre_usuario,
    cedula_Usuario,
    telefono_usuario,
    mail_usuario,
  } = req.body;
  let user = new Usuario(
    nombre_usuario,
    cedula_Usuario,
    telefono_usuario,
    mail_usuario
  );
  user = await user.save();

  res.json({
    userId: user,
  });
};

const deleteUser = async (req, res = response) => {
  const { id } = req.body;
  const resposnse = await Usuario.deleteUser(id);
  res.json({
    msg: resposnse === 0 ? "Usuario no encontrado" : "Usuario Eliminado",
  });
};

const updateUser = async (req, res = response) => {
  const {
    nombre_usuario,
    cedula_Usuario,
    telefono_usuario,
    mail_usuario,
    id,
  } = req.body;
  let user = new Usuario(
    nombre_usuario,
    cedula_Usuario,
    telefono_usuario,
    mail_usuario,
    id
  );
  try {
    user = await user.update();
    res.json({
      msg: `Usuario ${nombre_usuario} actualizado`,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res = response) => {
  try {
    const usuarios = await Usuario.findAllUsers();
    res.json({
      msg: "getUser",
      users: usuarios,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getUsers,
};
