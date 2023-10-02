const { User } = require("../models/model");

exports.signup = async (req, res) => {
    const { username, email, password, fullname } = req.body;
    const newUser = new User({
        username: username,
        email: email,
        password: password,
        fullName: fullname
    });
    await newUser.save();
    res.status(200).json({ message: 'Post received successfully you may login now' });
};

exports.login = async (req, res) => {
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            req.session = { username: username, id : user._id };
            req.session.save(() => {
                res.status(200).json({ message: 'You are directed to the homepage now' });
            });
        } else {
            res.status(401).json({ message: 'Wrong credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.logout = async (req,res) =>{
    req.session = null;
}