// 1 у любых пользователей будет в БД profissions
// 2 Они равны mock данным

const Profession = require("../models/Profession");
const Quality = require("../models/Quality");
const Bar = require("../models/Bar");
const Barmens = require("../models/Barmens");
const qualitiesMock = require("../mock/qualities.json");
const barsMock = require("../mock/bars.json");
const barmensMock = require("../mock/barmens.json");
const professionMock = require("../mock/professions.json");

module.exports = async () => {
    // profession
    const professions = await Profession.find();
    if (professions.length !== professionMock.length) {
        await createInitialEntity(Profession, professionMock);
    }
    // qualities
    const qualities = await Quality.find();
    if (qualities.length !== qualitiesMock.length) {
        await createInitialEntity(Quality, qualitiesMock);
    }
    // bars
    const bars = await Bar.find();
    if (bars.length !== barsMock.length) {
        await createInitialEntity(Bar, barsMock);
    }
    // barmens
    const barmens = await Barmens.find();
    if (barmens.length !== barmensMock.length) {
        await createInitialEntity(Barmens, barmensMock);
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return console.log(e);
            }
        })
    );
}
