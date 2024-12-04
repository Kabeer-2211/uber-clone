const captainModel = require('./../models/captain.model');

async function createCaptain({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const user = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return user;
}

module.exports = { createCaptain };