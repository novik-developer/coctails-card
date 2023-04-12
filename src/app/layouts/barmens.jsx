import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import BarmenPage from "../components/page/barmenPage/barmenPage";
import BarmensListPage from "../components/page/barmensListPage/barmensListPage";

const Barmens = () => {
    const params = useParams();
    const { barmenId } = params;

    return (
        <>
            {barmenId ? (
                <BarmenPage barmenId={barmenId} />
            ) : (
                <BarmensListPage />
            )}
        </>
    );
};

export default Barmens;
