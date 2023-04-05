import express from "express";
import { calendarController } from "../controllers/calendar.controller";
const calendarRoutes = express.Router();

calendarRoutes.get('/list-appointments', calendarController.listAppointments)
calendarRoutes.get('/appointment/:id', calendarController.getAppointmentById)
calendarRoutes.post('/insert-appointment', calendarController.insertAppointment)
calendarRoutes.delete('/remove-appointment/:id', calendarController.deleteAppointment)
calendarRoutes.put('/update-appointment/:id', calendarController.updateAppointmentById)

export default calendarRoutes