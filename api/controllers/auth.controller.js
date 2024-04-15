import User from "../models/user.model.js"
import bcryptjs from "bcryptjs" // hash passwords
import { errorHandler } from "../utils/error.js"

// signup controller
export const signup = async (req, res, next) => {
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
        // return res.status(400).json({ message: "All fields are required" })
        next(errorHandler(400, "All fields are required"))
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
        // check for duplicate users
    } catch (error) {
        next(error)
    }
}
