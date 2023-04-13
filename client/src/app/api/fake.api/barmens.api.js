import { barsObject as bars } from "./bars.api";

const qualities = {
    tedious: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "Нудила",
        color: "primary"
    },
    strange: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "Странный",
        color: "secondary"
    },
    buller: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "Троль",
        color: "success"
    },
    alcoholic: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "Алкоголик",
        color: "danger"
    },
    handsome: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "Красавчик",
        color: "info"
    },
    uncertain: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "Неуверенный",
        color: "dark"
    }
};

const barmens = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Джон Дориан",
        email: "Jony7351@tw.com",
        city: "Абакан",
        sex: "male",
        bar: bars.welcome,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        rate: 2.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        email: "white4571@twipet.com",
        city: "Москва",
        sex: "male",
        bar: bars.boss,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        rate: 2.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        city: "Минск",
        email: "bob007@tw.com",
        sex: "male",
        bar: bars.boomerang,
        qualities: [qualities.buller],
        rate: 3.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Рэйчел Грин",
        email: "green7311@fam.biz",
        city: "Лондон",
        sex: "female",
        bar: bars.puapub,
        qualities: [qualities.uncertain],
        rate: 3.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        email: "mindgames6878@phis.tech",
        city: "Барнаул",
        sex: "male",
        bar: bars.emibar,
        qualities: [qualities.strange, qualities.tedious],
        rate: 4.6
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        email: "mindes000@phis.tech",
        city: "Санкт-петербург",
        sex: "male",
        bar: bars.evening,
        qualities: [qualities.strange, qualities.uncertain],
        rate: 3.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Говард Воловиц",
        email: "gov1903@phis.tech",
        city: "Вологда",
        sex: "male",
        bar: bars.baranz,
        qualities: [qualities.strange, qualities.tedious],
        rate: 3.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Никола Тесла",
        email: "electro@underground.tech",
        city: "Москва",
        sex: "male",
        bar: bars.zodiac,
        qualities: [qualities.handsome],
        rate: 5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Моника Геллер",
        email: "mono@super.com",
        city: "Москва",
        sex: "female",
        bar: bars.barial,
        qualities: [qualities.strange, qualities.uncertain],
        rate: 4.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Рататуй",
        email: "ratatatata@underground.com",
        city: "Кинешма",

        sex: "male",
        bar: bars.whisky,
        qualities: [qualities.handsome, qualities.buller],
        rate: 4.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Джоуи Триббиани",
        email: "joe@trib.com",
        city: "Санкт-петербург",
        sex: "male",
        bar: bars.chef,
        qualities: [qualities.uncertain, qualities.strange],
        rate: 3.5
        // bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Брэд Питт",
        email: "superstar@star.com",
        city: "Санкт-петербург",
        sex: "male",
        bar: bars.welcome,
        qualities: [qualities.handsome],
        rate: 5
        // bookmark: false
    }
];
if (!localStorage.getItem("barmens")) {
    localStorage.setItem("barmens", JSON.stringify(barmens));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("barmens")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const barmens = JSON.parse(localStorage.getItem("barmens"));
        const barmenIndex = barmens.findIndex((b) => b._id === id);
        barmens[barmenIndex] = { ...barmens[barmenIndex], ...data };
        localStorage.setItem("barmens", JSON.stringify(barmens));
        resolve(barmens[barmenIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("barmens")).find(
                    (user) => user._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};
