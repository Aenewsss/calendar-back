import mongoose, { Schema } from "mongoose";

export const appointment = mongoose.model(
    'appointment',
    new Schema({
        _id: { type: Schema.Types.ObjectId, auto: true },
        date: { type: Date, required: true },
    })
)