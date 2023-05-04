const express = require("express");
const router = express.Router({ mergeParams: true });
const Barmens = require("../models/Barmens");

router.get("/", async (req, res) => {
    try {
        const list = await Barmens.find();
        res.status(200).send(list);
    } catch (err) {
        res.status(500).jsoon({
            message: "На сервере произошла ошибка",
        });
    }
});
router.patch("/:barmenId", async (req, res) => {
    try {
        const { barmenId } = req.params;
        // проверить запросы
        // todo:  userId === current user id
        if (barmenId === req.barmen._id) {
            console.log(req.barmen._id);
            const updatedBarmen = await User.findByIdAndUpdate(
                barmenId,
                req.body,
                {
                    new: true,
                }
            );
            res.send(updatedBarmen);
        } else {
            res.status(401).json({
                message: "Не авторизованный бармен",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка бармен",
        });
    }
});

module.exports = router;
