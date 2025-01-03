const userModel = require('./../models/user.model');
const captainModel = require('./../models/captain.model');
const blacklistTokenModel = require('./../models/blacklistToken.model');
const jwt = require('jsonwebtoken');

async function authUser(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const isBlackListed = await blacklistTokenModel.findOne({ token: token });
    if (isBlackListed) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

async function authCaptain(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const isBlackListed = await blacklistTokenModel.findOne({ token: token });
    if (isBlackListed) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = {authUser, authCaptain};