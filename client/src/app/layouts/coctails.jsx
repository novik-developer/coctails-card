import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CoctailsListPage from "../components/page/coctailListPage/coctailListPage";

import CoctailPageInfo from "../components/page/coctailPageInfo/coctailPageInfo"; // import CoctailPage from "../components/page/coctailPage/coctailPage";

const Coctails = () => {
    const params = useParams();
    const { coctalId } = params;
    return (
        <>
            {coctalId ? (
                <CoctailPageInfo coctalId={coctalId} />
            ) : (
                <CoctailsListPage />
            )}
        </>
    );
};

export default Coctails;
