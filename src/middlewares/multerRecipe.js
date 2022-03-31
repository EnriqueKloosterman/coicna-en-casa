const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, filename, cb) => {
        cb(null, 'public/images/recipes');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

let upload = multer({ storage: storage});

module.exports = upload; 