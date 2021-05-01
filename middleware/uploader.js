const multer = require('multer');
const SIZE = require('../constant/size');

const VALID_EXTATIONS = ['image/png', 'image/jpeg', 'image/jpg'];

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '/uploads');
    },

    filename(req, file, cb) {
        cb(null, `${file.originalname}-${Date.now()}`);
    },
});
const limits = {
    fileSize: SIZE.ONE_MB * 5,
};

function fileFilter(req, file, cb) {
    if (VALID_EXTATIONS.includes(file.mimetype)) {
        cb(null, true);
        return;
    }

    cb(null, false);
}

module.exports = multer({
    storage,
    limits,
    fileFilter,
});
