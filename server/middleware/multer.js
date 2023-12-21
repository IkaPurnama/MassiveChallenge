import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/Massive/server/public/images");
  },
  filename: function (req, file, cb) {
    // validatin mime type in here
    const uniqueSuffix = Date.now().toString();
    cb(null, file.originalname);

    //   false
  },
});

export default multer({ storage: storage }).single("ktp");
