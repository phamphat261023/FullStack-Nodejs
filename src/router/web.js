import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);

  router.get("/get-crud", homeController.displayGetCRUD);

  router.get("/update-crud", homeController.getUpdateCRUD);

  router.post("/put-crud", homeController.putCRUD);

  router.get("/delete-crud", homeController.deleteCRUD);

  //API routes

  router.post("/api/login", userController.handleLogin);

  router.get("/api/get-all-users", userController.handleGetAllUsers);

  router.post("/api/create-users", userController.handleCreateUsers);

  router.put("/api/update-user", userController.handleUpdateUsers);

  router.delete("/api/delete-user", userController.handleDeleteUsers);

  // router.get("/allcode", userController.handleGetAllCode);

  return app.use("/", router);
};

export default initWebRouter;
