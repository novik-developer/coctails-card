import React, { useState } from "react";
import { useBarmen } from "../../../hooks/useBarmens";
import ContainerWrapper from "../../common/container";
import { paginate } from "../../../utils/paginate";
import BarmenTable from "../../ui/barmenTable";
import Pagination from "../../common/pagination";
// import Dropdouwn from "../../common/dropdouwn";

const BarmensListPage = () => {
    const pageSize = 4;
    const { barmens, getBarmensId, getSortedBarmens, sortedBarmens, sortBy } =
        useBarmen();
    const [currentPage, setCurrentPage] = useState(1);

    const handleSort = (item) => {
        getSortedBarmens(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleDelete = (barmenId) => {
        getBarmensId(barmenId);
    };

    const count = barmens.length;

    const barmenCrop = paginate(sortedBarmens, currentPage, pageSize);

    if (barmenCrop.length === 0 && sortedBarmens.length) {
        setCurrentPage((currentPage) => currentPage - 1);
    }

    return (
        <div>
            <ContainerWrapper>
                <div className="d-flex flex-column flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1>Barmen</h1>
                        {/* <Dropdouwn>Фильтр</Dropdouwn> */}
                    </div>
                    <BarmenTable
                        barmens={barmenCrop}
                        selectedSort={sortBy}
                        onDelete={handleDelete}
                        onSort={handleSort}
                    />
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
};

export default BarmensListPage;
