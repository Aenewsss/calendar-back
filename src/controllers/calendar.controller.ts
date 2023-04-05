import express from "express";
import httpStatusCode from "http-status-codes"
import { calendarService } from "../services/calendar.service";

export const calendarController = {
    async listAppointments(req: express.Request, res: express.Response) {
        try {
            const appointments = await calendarService.listAppointments();

            res.json({ appointments })
        } catch (error) {
            res.status(httpStatusCode.BAD_REQUEST).json({ message: `Error: ${error}` })
        }
    },

    async getAppointmentById(req: express.Request, res: express.Response) {
        try {

            const { id } = req.params

            const appointment = await calendarService.getAppointmentById(id);

            res.json({ message: "Appointment found", appointment })
        } catch (error) {
            res.status(httpStatusCode.BAD_REQUEST).json({ message: `Error: ${error}` })
        }
    },

    async insertAppointment(req: express.Request, res: express.Response) {
        try {
            console.log(req.body)
            const { date } = req.body

            const newAppointment = await calendarService.insertAppointment(date);

            res.json({ message: "Appointment inserted", newAppointment })
        } catch (error) {
            res.status(httpStatusCode.BAD_REQUEST).json({ message: `Error: ${error}` })
        }
    },

    async deleteAppointment(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params

            const appointment = await calendarService.deleteAppointment(id);

            res.json({ message: "Appointment deleted", appointment })
        } catch (error) {
            res.status(httpStatusCode.BAD_REQUEST).json({ message: `Error: ${error}` })
        }
    },

    async updateAppointmentById(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params
            const { date } = req.body

            if (!date) return res.status(httpStatusCode.BAD_REQUEST).json({ message: `Date not provided` })

            const appointment = await calendarService.updateAppointment(id, date);

            res.json({ message: "Appointment updated", appointment })
        } catch (error) {
            res.status(httpStatusCode.BAD_REQUEST).json({ message: `Error: ${error}` })
        }
    },
}