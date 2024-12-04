const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        defafult: Date.now,
        expires: 86400
    }
});

const blacklistTokenModel = mongoose.model('blacklistToken', blacklistTokenSchema);

module.exports = blacklistTokenModel;