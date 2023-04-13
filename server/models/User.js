const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: { type: String },
        email: { type: String, required },
        password: { type: String, required },
        completedMeetings: { type: Number },
        image: String,
        profession: { type: Schema.Types.ObjectId, ref: "Profession" },
        bar: { type: Schema.Types.ObjectId, ref: "Bar" },
        qualities: [{ type: Schema.Types.ObjectId, ref: "Quality" }],
        rate: number,
        sex: { type: String, enum: ["male", "female", "other"] },
    },
    { timestamps: true }
);

module.exports = model("User", schema);
