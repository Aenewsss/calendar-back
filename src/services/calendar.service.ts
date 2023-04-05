import { IAppointment } from "../dtos/appointment.dto"
import { appointment } from "../models/appointment.model"


export const calendarService = {
    async listAppointments(): Promise<IAppointment[]> {
        return await appointment.find()
    },

    async getAppointmentById(_id: string): Promise<IAppointment | null> {
        return await appointment.findById(_id)
    },

    async insertAppointment(date: Date): Promise<IAppointment> {
        console.log("here", date)
        const newAppointment = new appointment({ date })
        console.log(newAppointment)
        return await newAppointment.save()
    },

    async deleteAppointment(_id: string): Promise<IAppointment | null> {
        return await appointment.findByIdAndDelete(_id)
    },

    async updateAppointment(_id: string, newDate: Date): Promise<IAppointment | null> {
        return await appointment.findByIdAndUpdate(_id,
            { date: newDate },
            { new: true })
    },
}