import storeUserService from "../services/storeUserService";

let getUserPage = async (req, res) => {

}

let createUser = async (req, res) => {
    return res.render('users/create.ejs');
}

let storeUser = async (req, res) => {
    let message = await storeUserService.storeUser(req.body);
    console.log(message);
    return res.send('store to db');
}

module.exports = {
    getUserPage: getUserPage,
    createUser: createUser,
    storeUser: storeUser
}