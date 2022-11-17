import bcrypt from "bcrypt";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let storeUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashUserPassword = await hashPassword(data.password);
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashUserPassword, 
            })
            resolve('Store user to db successfully!');
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    storeUser: storeUser,
}