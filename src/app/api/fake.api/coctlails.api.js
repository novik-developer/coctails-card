import CubaLibre from "../../../images/cuba-libre.jpeg";
import Daikiri from "../../../images/daikri.jpeg";
import DzhinTonik from "../../../images/Dzhin-Tonik_.webp";
import French75 from "../../../images/french-75.jpeg";
import LongIslandIceTea from "../../../images/long-island-ice-tea.png";
import MaiTai from "../../../images/mai-tai.jpeg";
import Mankhetan from "../../../images/mankhetan.jpeg";
import Margarita from "../../../images/margarita.webp";
import MoscowMule from "../../../images/Moscow-Mule.jpeg";
import Negroni from "../../../images/negroni.jpeg";

const recipes = {
    CubaLibre: {
        _id: "1",
        name: "Cuba-libre",
        text: "Хотите попробовать Куба либре? Это освежающий слабоалкогольный лонг на основе золотого рома с колой и соком лайма. Кола придаёт коктейлю ненавязчивую сладость, а кислинка лайма делает вкус более интересным. Идеален для утоления жажды жарким вечером."
    },
    Daikiri: {
        _id: "2",
        name: "Daikri",
        text: "Хотите попробовать Дайкири? Это кислый коктейль на основе рома с добавлением лаймового сока и сахарного сиропа. Дайкири придумал американец, посетивший Кубу, поэтому этот классический коктейль встречается на страницах многих произведений американской литературы ХХ века."
    },
    DzhinTonik: {
        _id: "3",
        name: "Dzhin-Tonik",
        text: "Хотите попробовать Куба либре? Это освежающий слабоалкогольный лонг на основе золотого рома с колой и соком лайма. Кола придаёт коктейлю ненавязчивую сладость, а кислинка лайма делает вкус более интересным. Идеален для утоления жажды жарким вечером. "
    },
    French75: {
        _id: "4",
        name: "French-75",
        text: "Впервые напиток с названием 75 Cocktail появился в справочнике Гарри Макэлхоуна ABC Cocktails (1923). В нем практиковалось сочетание кальвадоса, джина, анисовой настойки и гренадина. Через несколько лет Фрэнк Мейер из парижского отеля Ritz вычел из рецептуры кальвадос и гренадин, приплюсовав джин и шампанское."
    },
    LongIslandIceTea: {
        _id: "5",
        name: "Long-island-ice-tea",
        text: "Хотите попробовать Лонг айленд айс ти? Это очень крепкий лонг на пяти видах алкоголя. Кроме водки, джина, рома, текилы и цитрусового ликёра, туда добавляют колу и лимонный сок, так что на вкус он получается сладковато-кислым. Коктейль придумали во времена сухого закона в Америке, маскируя его под чай, поэтому иногда его до сих пор подают в чайниках или френч-прессах."
    },
    MaiTai: {
        _id: "6",
        name: "Mai-Tai",
        text: "Хотите попробовать Май тай? Это крепкий лонг на выдержанном роме с ликером драй оранж и двумя сиропами - сахарным и миндальным. Благодаря соку лайма и ананаса коктейль получается кислым и очень вкусным. Таитяне, которые дали коктейлю название, когда впервые попробовали Май тай, сказали, что он не от мира сего."
    },
    Mankhetan: {
        _id: "7",
        name: "Mankhetan",
        text: "Хотите попробовать Манхэттен? Это классический коктейль на основе бурбона с добавлением красного вермута. На вкус Манхэттен сладковатый с травяными нотками, которые привносит вермут и капля ангостуры. Кстати, ходят слухи, что придумала его мать Уинстона Черчилля. Возможно, и сам Премьер любил пропустить бокальчик этого замечательного напитка."
    },
    Margarita: {
        _id: "8",
        name: "Margarita",
        text: "Хотите попробовать маргариту? Это солоноватый кислый коктейль на текиле с лаймовым соком. Бармены во всем мире очень любят создавать твисты на этот классический коктейль, но окаёмка из соли практически всегда остаётся неизменным украшением Маргариты."
    },
    MoscowMule: {
        _id: "9",
        name: "Moscow-Mule",
        text: "«Московский мул» (англ. Moscow Mule, также упрямец[1]) — коктейль на основе водки, имбирного пива и лайма, который подают в медной кружке. Популярность стал набирать после начала бума потребления русской водки в США в 1950-х годах[2]. Название связано с ассоциацией водки и русской культуры у американцев. Классифицируется как лонг дринк. Входит в число официальных коктейлей Международной ассоциации барменов (IBA), категория «Современная классика» (англ. Contemporary classics)[3]."
    },
    Negroni: {
        _id: "10",
        name: "Negroni",
        text: "Хотите попробовать Негрони? Это крепкий горький коктейль на основе джина с добавлением биттера и красного вермута. Идеален как в качестве аперитива, так и дижестива. Один из самых популярных коктейлей в мире, потрясающе вкусный и гармоничный. "
    }
};

const coctails = [
    {
        id: 1,
        imgUrl: CubaLibre,
        title: "Cuba-libre",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.CubaLibre,
        description: "The best coctail ever!"
    },
    {
        id: 2,
        imgUrl: Daikiri,
        title: "Daikri",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.Daikiri,
        description: "The best coctail ever!"
    },
    {
        id: 3,
        imgUrl: DzhinTonik,
        title: "Dzhin-Tonik",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.DzhinTonik,
        description: "The best coctail ever!"
    },
    {
        id: 4,
        imgUrl: French75,
        title: "French-75",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.French75,
        description: "The best coctail ever!"
    },
    {
        id: 5,
        imgUrl: LongIslandIceTea,
        title: "Long-island-ice-tea",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.LongIslandIceTea,
        description: "The best coctail ever!"
    },
    {
        id: 6,
        imgUrl: MaiTai,
        title: "Mai-Tai",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.MaiTai,
        description: "The best coctail ever!"
    },
    {
        id: 7,
        imgUrl: Mankhetan,
        title: "Mankhetan",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.Mankhetan,
        description: "The best coctail ever!"
    },
    {
        id: 8,
        imgUrl: Margarita,
        title: "Margarita",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.Margarita,
        description: "The best coctail ever!"
    },
    {
        id: 9,
        imgUrl: MoscowMule,
        title: "Moscow-Mule",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.MoscowMule,
        description: "The best coctail ever!"
    },
    {
        id: 10,
        imgUrl: Negroni,
        title: "Negroni",
        isFavourite: false,
        isAlc: false,
        recipe: recipes.Negroni,
        description: "The best coctail ever!"
    },
    {
        id: 11,
        imgUrl: CubaLibre,
        isFavourite: false,
        title: "No-acl",
        isAlc: true,
        recipe: recipes.CubaLibre,
        description: "The best coctail ever!"
    },
    {
        id: 12,
        imgUrl: CubaLibre,
        isFavourite: false,
        title: "No-acl",
        isAlc: true,
        recipe: recipes.CubaLibre,
        description: "The best coctail ever!"
    }
];

if (!localStorage.getItem("coctails")) {
    localStorage.setItem("coctails", JSON.stringify(coctails));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("coctails")));
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("coctails")).find(
                    (coctail) => coctail._id === id
                )
            );
        }, 1000);
    });

export default {
    fetchAll,
    getById
};
