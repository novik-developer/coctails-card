export const barsObject = {
    welcome: { _id: "67rdca3eeb7f6fgeed471818", name: "Welcome" },
    boss: { _id: "67rdca3eeb7f6fgeed471820", name: "Босс" },
    boomerang: { _id: "67rdca3eeb7f6fgeed471814", name: "Бумеранг" },
    puapub: { _id: "67rdca3eeb7f6fgeed471822", name: "PuaPub" },
    emibar: { _id: "67rdca3eeb7f6fgeed471824", name: "EmiBar" },
    evening: { _id: "67rdca3eeb7f6fgeed471829", name: "Вечернее" },
    baranz: { _id: "67rdca3eeb7f6fgerd471829", name: "Baranz" },
    zodiac: { _id: "67rdca3eeb7f6fgefd471829", name: "Зодиак" },
    barial: { _id: "67rdca3eeb7f6fgedd471829", name: "Barial" },
    whisky: { _id: "67rdca3eeb7f6fgedd471829", name: "Whisky" },
    chef: { _id: "67rdca3eeb7f6fgedd471829", name: "Chef" }
};

export const bars = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Welcome" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Босс" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Бумеранг" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "PuaPub" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "EmiBar" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Вечернее" },
    { _id: "67rdca3eeb7f6fgerd471829", name: "Baranz" },
    { _id: "67rdca3eeb7f6fgefd471829", name: "Зодиак" },
    { _id: "67rdca3eeb7f6fgedd471829", name: "Barial" },
    { _id: "67rdca3eeb7f6fgedd471829", name: "Whisky" },
    { _id: "67rdca3eeb7f6fgedd471829", name: "Chef" }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(barsObject);
        }, 2000);
    });

export default {
    fetchAll
};
