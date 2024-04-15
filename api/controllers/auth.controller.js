import User from "../models/user.model.js"
import bcryptjs from "bcryptjs" // hash passwords
export const signup = async (req, res) => {
    // console.log(req.body) // api testing
    const { username, email, password } = req.body

    if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
    ) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    // add new user to database
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })  

    try {
        // save new user to database
        await newUser.save()
        res.json("Signup successful")
    } catch (error) {
        // check for duplicate users
        res.status(500).json({ message: error.message })
    }
}
