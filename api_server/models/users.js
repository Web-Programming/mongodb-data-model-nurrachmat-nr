//Model users.js
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    hash: String,
    salt: String
});

//untuk menggenerate hash dan salt di model user
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
}
//untuk memvalidasi password (saat login)
userSchema.methods.validPassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
}

userSchema.method.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // 7 hari

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime / 1000, 10)
    }, process.env.JWT_SECRET);
}

mongoose.model("User", userSchema, "user");