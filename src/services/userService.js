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

let listUser = async () => {
    return new Promise(async (reslove, reject) => {
        try {
            let users = db.User.findAll();
            reslove(users)
        } catch (e) {
            reject(e)
        }
    });
}

let editUser = async (userId) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true
            });

            reslove(user);

        } catch (e) {
            reject(e);
        }
    });
}

let updateUser = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            });
            let hashUserPassword = await hashPassword(data.password);
            if (user) {
                user.firstName = data.firstName,
                    user.lastName = data.lastName,
                    user.email = data.email,
                    user.password = hashUserPassword
                await user.save();
                reslove();
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    });
}

let deleteUser = async (userId) => {
    return new Promise(async (reslove, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            });

            if (user) {
                await user.destroy();
            }

            reslove();

        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    storeUser: storeUser,
    listUser: listUser,
    editUser: editUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
}