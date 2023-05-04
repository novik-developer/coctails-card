import React, { useEffect, useState } from "react";
import { useBarmen } from "../../../hooks/useBarmens";
import ContainerWrapper from "../../common/container";
import { paginate } from "../../../utils/paginate";
import BarmenTable from "../../ui/barmenTable";
import Pagination from "../../common/pagination";
import { getBarmensList, loadBarmenIdList } from "../../../store/barmens";
import { useDispatch, useSelector } from "react-redux";

const BarmensListPage = () => {
    const { getSortedBarmens, sortedBarmens, sortBy, getDeleteBarmensId } =
        useBarmen();
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBarmenIdList());
    }, []);
    const barmens = useSelector(getBarmensList());

    if (!barmens) return "Loading...";

    const pageSize = 4;

    const handleSort = (item) => {
        getSortedBarmens(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleDelete = (barmenId) => {
        getDeleteBarmensId(barmenId);
    };

    const count = sortedBarmens.length;

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
                    </div>
                    {count ? (
                        <>
                            {" "}
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
                        </>
                    ) : (
                        "Не найдено... попробуйте позже"
                    )}
                </div>
            </ContainerWrapper>
        </div>
    );
};

export default BarmensListPage;
