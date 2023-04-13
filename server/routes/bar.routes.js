const express = require("express");
const router = express.Router({ mergeParams: true });
const Bar = require("../models/Bar");

router.get("/", async (req, res) => {
    try {
        const list = await Bar.find();
        res.status(200).send(list);
    } catch (err) {
        res.status(500).jsoon({
            message: "На сервере произошла ошибка",
        });
    }
});

module.exports = router;
