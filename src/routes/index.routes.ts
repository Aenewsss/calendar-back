import express from "express";
const routes = express.Router();
import calendarRoutes from "./calendar.routes";

routes.use("/", calendarRoutes)

export default routes