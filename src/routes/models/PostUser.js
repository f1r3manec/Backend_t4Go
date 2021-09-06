const { response } = require("express");
const { db } = require("../database/config");

class PostUser {
  constructor(
    nombre_usuario,
    cedula_Usuario,
    telefono_usuario,
    mail_usuario,
    id = null
  ) {
    (this.nombre_usuario = nombre_usuario),
      (this.cedula_Usuario = cedula_Usuario),
      (this.telefono_usuario = telefono_usuario),
      (this.mail_usuario = mail_usuario),
      (this.id = id);
  }
  async save() {
    const sql = `INSERT INTO usuarios(nombre_usuario, cedula_Usuario, telefono_usuario, mail_usuario) VALUES ('${this.nombre_usuario}', '${this.cedula_Usuario}', '${this.telefono_usuario}', '${this.mail_usuario}')`;
    try {
      const [newUser, _] = await db.execute(sql);
      return newUser.insertId;
    } catch (error) {
      throw error;
    }
  }

  async update() {
    const sql = `UPDATE usuarios SET nombre_usuario='${this.nombre_usuario}', cedula_Usuario='${this.cedula_Usuario}', telefono_usuario='${this.telefono_usuario}', mail_usuario='${this.mail_usuario}' WHERE id=${this.id}`;
    try {
      const [newUser, _] = await db.execute(sql);
      return newUser.insertId;
    } catch (error) {
      throw error;
    }
  }

  static async findAllUsers() {
    const sql = "SELECT * from usuarios;";

    const [response] = await db.execute(sql);

    return response;
  }

  static async deleteUser(idUsuario) {
    const sql = `DELETE FROM usuarios WHERE id=${idUsuario};`;
    const [resposne] = await db.execute(sql);
    console.log(resposne.affectedRows);
    return resposne.affectedRows;
  }
}

module.exports = PostUser;
