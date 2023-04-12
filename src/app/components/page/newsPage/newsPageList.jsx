import React from "react";
import ContainerWrapper from "../../common/container";
import NewsCard from "../../ui/newsCard";

const NewsPageList = () => {
    return (
        <>
            <ContainerWrapper>
                <h1>Новости</h1>
            </ContainerWrapper>
            <NewsCard />
        </>
    );
};

export default NewsPageList;
