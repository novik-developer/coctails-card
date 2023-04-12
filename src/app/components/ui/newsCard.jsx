import React from "react";
import Divider from "../common/divider";
import { faker } from "@faker-js/faker/locale/ru";
import { timestampToDate } from "../../utils/timestampToDate";

const NewsCard = () => {
    const randomName = faker.name.fullName();
    const randomData = faker.datatype.datetime({
        min: 1577836800000,
        max: 1893456000000
    });

    return (
        <>
            <div>
                <h3>{randomName}</h3>
                <span>{timestampToDate(randomData)}</span>
                <Divider />
                <p>{faker.lorem.text()}</p>
            </div>
            <div>
                <h3>{randomName}</h3>
                <span>{timestampToDate(randomData)}</span>
                <Divider />
                <p>{faker.lorem.text()}</p>
            </div>
        </>
    );
};

export default NewsCard;
