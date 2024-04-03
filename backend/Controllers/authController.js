import User from '../models/UserSchema.js';
import Client from '../models/ClientSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = user=>{
    return jwt.sign({id:user._id, roles:user.role}, process.env.JWT_SECRET_KEY,{
        expiresIn:"15d",
    })}


export const register = async (req, res) => {
    const { email, name, password, role, gender } = req.body;

    try {
        let user = null;

        if (role === "individual") {
            user = await User.findOne({ email });
        } else if (role === "business") {
            user = await Client.findOne({ email });
        }

        // Check if user exists
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === "individual") {
            user = new User({
                name,
                email,
                password: hashPassword,
                gender,
                role,
            });
        }

        if (role === "business") {
            user = new Client({
                name,
                email,
                password: hashPassword,
                gender,
                role
            });
        }

        await user.save();
        res.status(200).json({ success: true, message: "User Successfully Added" });

    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error, please try again later" });
    }
};

export const login = async (req, res) => {
    const {email} = req.body;
    try {

        let user=null

        const individual = await User.findOne({email})
        const business = await Client.findOne({email})

        if(individual){
            user = individual
        }
        if(business){
            user = business
        }
        //Check if user is already existing or not
        if(!user){
            return res.status(404).json({message: "User Not Found"});
        }

        //compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordMatch){
            return res.status(404).json({ status:false, message:"Invalid password"}); 
        }

        //GET TAKE 
        const token = generateToken(user);

        const{password, role, appointments, ...rest} = user._doc

        res
            .status(200)
            .json({ status:200, message:"Successfully login", token, data:{... rest}, role});

    } catch (err) {
        res.status(500).json({ status:false, message:"Failed to login"});
    }
};
