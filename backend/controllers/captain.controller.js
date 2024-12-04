const captainModel = require('./../models/captain.model');
const blacklistTokenModel = require('./../models/blacklistToken.model');
const { createCaptain } = require('./../services/captain.service');
const { validationResult } = require('express-validator')

async function registerCaptain(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fullname, email, password, vehicle } = req.body;
        const isCaptainAlreadyExist = await captainModel.findOne({ email });
        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: 'Captain already exist' });
        }
        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });
        const token = captain.generateAuthToken();
        return res.status(201).json({ token, captain });
    } catch (err) {
        return res.status(401).json({ message: "Captain already exist" });
    }
}
// async function loginUser(req, res) {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         const { email, password } = req.body;
//         const user = await captainModel.findOne({ email }).select('+password');
//         if (!user) {
//             return res.status(401).json({ message: 'invalid credentials' });
//         }
//         const isMatch = await user.comparePassword(password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'invalid credentials' });
//         }
//         const token = user.generateAuthToken();

//         res.status(200).json({ token, user });
//     } catch (err) {
//         return res.status(401).json({ message: "invalid credentials" });
//     }
// }
// async function getUserProfile(req, res) {
//     try {
//         return res.status(200).json(req.user);
//     } catch (err) {
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// }
// async function logoutUser(req, res) {
//     const token = req.headers.authorization?.split(' ')[1];
//     await blacklistTokenModel.create({ token });
//     res.status(200).json({ message: 'logged out' });
// }

module.exports = { registerCaptain };
