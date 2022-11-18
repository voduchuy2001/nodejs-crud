import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/list-user', userController.listUser);

    router.get('/create-user', userController.createUser);
    router.post('/store-user', userController.storeUser);

    router.get('/edit-user', userController.editUser);
    router.post('/update-user', userController.updateUser);

    router.get('/delete-user', userController.deleteUser);

    return app.use("/", router);
}

module.exports = initWebRoutes;