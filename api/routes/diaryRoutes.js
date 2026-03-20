const { Router } = require("express");
const diaryController = require("../controller/diaryController");

const diaryRouter = Router();

diaryRouter.get("/", diaryController.getAll);

diaryRouter.post("/", diaryController.addStory)


module.exports = diaryRouter;