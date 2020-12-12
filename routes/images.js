const express = require("express");
const router = express.Router();
const multer = require('multer')
const imageController = require("../controllers/images");
const Image = require('../models/image')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
}) 

const upload = multer({ storage: fileStorage})

router.get("/api/images", imageController.getImages);
router.post("/api/images", upload.single('image'), function(req, res, next) {
    const image = new Image({
        path: "/" + req.file.path
      });
      return image.save();
});



module.exports = router;