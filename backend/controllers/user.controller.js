const userModel = require('../models/user.model');
const { createUser } = require('./../services/user.service');
const { validationResult } = require('express-validator')

async function registerUser(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fullname, email, password } = req.body;
        const hashedPassword = await userModel.hashPassword(password);
        const user = await createUser({
            firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword
        });
        const token = user.generateAuthToken();
        return res.status(201).json({ token, user });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function loginUser(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'invalid credentials' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'invalid credentials' });
        }
        const token = user.generateAuthToken();

        res.status(200).json({ token, user });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { registerUser, loginUser };
