import { getConnection } from "../database";

export const login = async (data) => {
  try {
    const db = await getConnection();
    const [result] = await db.query(`SELECT * FROM user WHERE username = ?`, [
      data.username,
    ]);

    return result;
  } catch (error) {
    console.error("Error in login query:", error);
    throw error; // Rethrow the error for better debugging
  }
};

export const register = async (data) => {
  try {
    const db = await getConnection();
    await db.query(
      `INSERT INTO user(fname, lname, username, email, phone_number, password, gambar, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.fname,
        data.lname,
        data.username,
        data.email,
        data.phone_number,
        data.password,
        data.gambar || "",
        data.role,
      ]
    );

    return true;
  } catch (error) {
    console.error("Error in register query:", error);
    throw error; // Rethrow the error for better debugging
  }
};

export const loggedIn = async (username) => {
  const db = await getConnection();
  const [result] = await db.query(`SELECT * FROM user WHERE username = ?`, [
    username,
  ]);

  return result;
};

export const booking = async (data) => {
  const db = await getConnection();
  await db.query(`INSERT INTO booking(nama, tgl_lahir, jk, no_hp, tgl_naik, tgl_turun, no_hp_kel, email, identitas, no_identitas, alamat, ktp) VALUES (
      '${data.nama}', '${data.tgl_lahir}', '${data.jk}', '${data.no_hp}', '${data.tgl_naik}', '${data.tgl_turun}', '${data.no_hp_kel}', '${data.email}', '${data.identitas}', '${data.no_identitas}', '${data.alamat}', '${data.ktp}')`);
  return true;
};

// import { getConnection } from "../database"

// export const login = async (data) => {
//   const db = await getConnection()
//   const [result] = await db.query(`SELECT * FROM user WHERE username = '${data.username}'`)

//   return result
// }

// export const register = async (data) => {
//   const db = await getConnection()
//   await db.query(`INSERT INTO user(fname, lname, username, email, phone_number, password, gambar, role) VALUES ('${data.fname}', '${data.lname}', '${data.username}', '${data.email}','${data.phone_number}','${data.password}', '${data.gambar}','${data.role}')`)

//   return true;
// }

//ambil data user yang sedang login
// export const loggedIn = async (username) => {
//   const db = await getConnection()
//   const [result] = await db.query(`SELECT * FROM user WHERE username = '${username}'`)

//   return result
// }

// authModel.js

// import { getConnection } from "../database";

// export const login = async (data) => {
//   const db = await getConnection();
//   const [result] = await db.query(`SELECT * FROM user WHERE username = ?`, [data.username]);

//   return result;
// };

// export const register = async (data) => {
//   const db = await getConnection();
//   await db.query(
//     `INSERT INTO user(username, password, role, fname, lname, phone_number, email, gambar) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//     [data.username, data.password, data.role, data.fname || '', data.lname || '', data.phone_number || '', data.email || '', data.gambar || '']
//   );

//   return true;
// };

// // ambil data user yang sedang login
// export const loggedIn = async (username) => {
//   const db = await getConnection();
//   const [result] = await db.query(`SELECT * FROM user WHERE username = ?`, [username]);

//   return result;
// };
