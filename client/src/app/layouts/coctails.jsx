import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CoctailEditPage from "../components/page/coctailEditPage/coctailEditPage";
import CoctailsListPage from "../components/page/coctailListPage/coctailListPage";

import CoctailPageInfo from "../components/page/coctailPageInfo/coctailPageInfo";
// import CoctailPage from "../components/page/coctailPage/coctailPage";
import FavouriteCoctails from "../components/ui/favouriteCoctails/favouriteCoctails";

const Coctails = () => {
    const params = useParams();
    const { coctalId, edit, favoruite } = params;
    return (
        <>
            {favoruite ? (
                <FavouriteCoctails />
            ) : edit ? (
                <CoctailEditPage />
            ) : coctalId ? (
                <CoctailPageInfo coctalId={coctalId} />
            ) : (
                <CoctailsListPage />
            )}
        </>
    );
};

export default Coctails;
