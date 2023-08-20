const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register User
exports.registerUser = async (req, res, next) => {
    try {
        const {  email_address, first_name, password } = req.body;

        // Check if the user already exists with the same email
        const existingUser = await User.findOne({ email_address });

        if (existingUser) {
            return res.status(400).json({
                message: 'User with this email already exists.'
            });
        }

        // Hash the password before saving it in the database
        const Rounds = 10;
        const hashedPassword = await bcrypt.hash(password, Rounds);

        const user = await User.create({
            email_address,
            first_name,
            password: hashedPassword
        });

        res.status(200).json({
            success: true,
            message: 'User register successfully.',
            user
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Login User
exports.loginUser = async (req, res, next) => {
    try {
        const { email_address, password } = req.body;

        if (!email_address || !password) {
            return res.status(400).json({ message: 'Please provide email and password.' });
        }

        // Check if the user exists with the provided email
        const user = await User.findOne({ email_address });

        if (!user) {
            return res.status(404).json({ message: 'User Not Found!' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(403).json({ message: 'Invalid credentials' });
        }

        // Password is correct, log in the user
        // You can create and return a JSON Web Token (JWT) here to handle authentication in subsequent requests
        const secretKey = 'FG457G8DHG5DGH54DG8H78HN1M'; // Replace with your actual secret key
        const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '5h' });

        // Set the token as a cookie in the response
        res.cookie('token', token, {
            maxAge: 5 * 60 * 60 * 1000, // 5 hours (in milliseconds)
            httpOnly: true,
            secure: true, // Set this to true if your application is using HTTPS
        });

        res.status(200).json({
            success: true,
            message: 'User logged in successfully!',
            token,
            user
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// logout user
exports.logoutUser = async (req, res, next) => {

    res.status(200).send('Logged Out successfully.');
    // try {
    //     res.cookie('token', null, {
    //         expires: new Date(Date.now()),
    //         httpOnly: true
    //  success
    //     res.status(200).json({
    //  successsuccess: true,
    //         message: "Logged out successfully"
    //     })
    // } catch (error) {
    //     return res.status(500).json({ success: false, message: 'Internal Server Error' });
    // }
};
