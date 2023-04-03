import mongoose from "mongoose"
import { randomBytes } from "crypto"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import { quotes, users } from './fakeDB.js'
import { JWT_SECRET } from "./config.js"

const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

const resolvers = {
    Query: {
        users: async () => await User.find({}),
        user: async (_, { _id }) => await User.findOne({_id}),
        quotes: async () => await Quote.find({}).populate("by", "_id firstName"),
        iquote: async (_, { by }) => await Quote.find({by})
    },
    User: {
        quotes: async (usr) => await Quote.find({by: usr.id})
    },
    Mutation: {
        signupUser: async (_, { userNew }) => {
            const user = await User.findOne({email: userNew.email})

            if(user) throw new Error("User already exists");

            const hashedPassword = await bcrypt.hash(userNew.password, 12);

            const newUser = new User({
                ...userNew,
                password: hashedPassword
            });

            return await newUser.save();
        },
        signinUser: async (_, { userSignIn }) => {
            const user = await User.findOne({email: userSignIn.email});

            if(!user) throw new Error("User does not exist");

            const isMatch = await bcrypt.compare(userSignIn.password, user.password);

            if(!isMatch) throw new Error("Email or Password is invalid");

            const token = jwt.sign({userId: user._id}, JWT_SECRET);
            
            return {token}
        },
        createQuote: async (_, {name}, {userId}) => {
            if(!userId) throw new Error("You are not logged in");

            const newQuote = new Quote({
                name,
                by: userId
            });

            await newQuote.save();
            return "Quote saved successfully"
        }
    }
}

export default resolvers;