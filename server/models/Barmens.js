const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: { type: String },
        city: { type: String },
        email: { type: String },
        bar: { type: String },
        rate: { type: String },
        sex: { type: String },
    },
    { timestamps: true }
);

module.exports = model("Barmens", schema);
