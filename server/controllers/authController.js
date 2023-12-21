import { login, register, loggedIn, booking } from "../models/authModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginController = async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const result = await login(data);
    const row = result[0];

    if (result.length > 0) {
      //jika username benar
      const match = await bcrypt.compare(data.password, row.password);

      if (match) {
        //jika password benar
        //daftarkan token
        const payload = { username: row.username };
        const token = jwt.sign(payload, "899TOKEN889", { expiresIn: "90day" });

        return res.status(200).json({
          id: row.id,
          username: row.username,
          fname: row.fname,
          lname: row.lname,
          email: row.email,
          phone_number: row.phone_number,
          gambar: row.gambar || "",
          role: row.role,
          success: true,
          token: token,
        });
      } else {
        //jika password salah
        return res.status(400).json({
          message: "Password salah",
          success: false,
        });
      }
    } else {
      return res.status(400).json({
        message: "Username salah",
        success: false,
      });
    }
    // console.log(result[0])
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

export const registerController = async (req, res) => {
  const data = {
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: bcrypt.hashSync(req.body.password, 10),
    gambar: req.body.gambar || "",
    role: req.body.role,
  };

  try {
    await register(data);

    return res.status(200).json({
      message: "Berhasil mendaftar, silahkan login",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};

//cek data user yang sedang login
export const loggedInController = async (req, res) => {
  const username = res.locals.jwt.username;

  try {
    const result = await loggedIn(username);

    return res.status(200).json({
      id: result[0].id,
      fname: result[0].fname,
      lname: result[0].lname,
      username: result[0].username,
      email: result[0].email,
      phone_number: result[0].phone_number,
      role: result[0].role,
      gambar: result[0].gambar || "",
      loggedIn: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};


export const bookingController = async (req, res) => {
  if (req.file === undefined) {
    return res.status(400).json({ msg: "Tidak ada file yang diupload" });
  }

  const { originalname: ktp, size } = req.file;

  const fileSize = size;
  const imageUrl = `${process.cwd()}\\public\\images\\${ktp}`;
  
  if (fileSize > 5000000) {
    return res.status(422).json({ msg: "Ukuran harus lebih kecil dari 5MB" });
  }

  const data = {
    nama: req.body.nama,
    tgl_lahir: new Date(req.body.tgl_lahir),
    jk: req.body.jk,
    no_hp: req.body.no_hp,
    tgl_naik: new Date(req.body.tgl_naik),
    tgl_turun: new Date(req.body.tgl_turun),
    no_hp_kel: req.body.no_hp_kel,
    email: req.body.email,
    identitas: req.body.identitas,
    no_identitas: req.body.no_identitas,
    alamat: req.body.alamat,
    ktp: imageUrl, // Simpan path file ke dalam database
  };

  try {
    await booking(data);
    
    return res.status(200).json({
      success: true,
      data: {},
      message: "Berhasil mendaftar pendakian",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Gagal mendaftar pendakian",
      error: err.message,
    });
  }
};