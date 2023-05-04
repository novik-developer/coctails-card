import React, { useState } from "react";

import { Col, Row, Spinner } from "react-bootstrap";

import CoctailPage from "../coctailPage/coctailPage";
import styles from "./coctailListPage.module.scss";
import Pagination from "../../common/pagination";
import { useCoctails } from "../../../hooks/useCoctails";
import Search from "../../ui/serach";

const CoctailsListPage = () => {
    const {
        coctails,
        getFavouriteCoctail,
        getSortedCoctails,
        getSortedNoalcCoctails
    } = useCoctails();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");

    const count = coctails.length;
    const pageSize = 4;

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleToggleFavourite = (id) => {
        getFavouriteCoctail(id);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return [...items].splice(startIndex, pageSize);
    };

    const handleSort = () => {
        setCurrentPage(1);
        setSearchValue("");
        getSortedCoctails();
    };

    const handleNoAlc = () => {
        getSortedNoalcCoctails();
    };

    const filteredSearchUsers =
        coctails &&
        coctails.filter((item) => {
            return Object.values(item)
                .join("")
                .toLowerCase()
                .includes(searchValue.toLowerCase().trim());
        });

    const coctailCrop = paginate(filteredSearchUsers, currentPage, pageSize);

    if (coctailCrop.length === 0 && filteredSearchUsers.length) {
        setCurrentPage((currentPage) => currentPage - 1);
    }

    return (
        <>
            <div>
                <div className="d-flex align-items-center ">
                    <div>
                        <button
                            className="btn btn-primary mb-2"
                            onClick={handleSort}
                        >
                            Любимые
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleNoAlc}
                        >
                            Безалкогольные
                        </button>
                    </div>
                    <Search {...{ searchValue, handleSearchChange }} />
                </div>
                <Row>
                    {!count ? (
                        <div className={styles.spinner}>
                            {" "}
                            <Spinner />
                        </div>
                    ) : (
                        coctailCrop.map((coctail) => (
                            <Col key={coctail.id} lg={4}>
                                <CoctailPage
                                    coctails={coctail}
                                    title={coctail.title}
                                    isFavourite={coctail.isFavourite}
                                    id={coctail.id}
                                    img={coctail.imgUrl}
                                    onToggleFavourite={handleToggleFavourite}
                                />
                            </Col>
                        ))
                    )}
                </Row>
                {filteredSearchUsers.length > 0 ? (
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                ) : (
                    <div className="badge bg-secondary text-wrap p-3 m-4">
                        Coctail not found
                    </div>
                )}
            </div>
        </>
    );
};

export default CoctailsListPage;
