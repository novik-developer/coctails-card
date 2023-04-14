import React from "react";
import PropTypes from "prop-types";
// import { Col, Row, Spinner } from "react-bootstrap";
// import CoctailPage from "../../page/coctailPage/coctailPage";
// import { Col, Row, Spinner } from "react-bootstrap";
// import styles from "./coctailListPage.module.scss";
// import CoctailPage from "../../page/coctailPage/coctailPage";

const FavouriteCoctails = ({ coctails }) => {
    console.log("coctails", coctails);

    return (
        <>
            {coctails && coctails.map((coctail) => coctail)}
            <h1>hello</h1>
        </>
        // <Row>
        //     {!coctails ? (
        //         <div>
        //             {" "}
        //             <Spinner />
        //         </div>
        //     ) : (
        //         coctails.map((coctail) => (
        //             <Col key={coctail.id} lg={4}>
        //                 <CoctailPage
        //                     coctails={coctail}
        //                     title={coctail.title}
        //                     isFavourite={coctail.isFavourite}
        //                     id={coctail.id}
        //                     img={coctail.imgUrl}
        //                     // onToggleFavourite={handleToggleFavourite}
        //                 />
        //             </Col>
        //         ))
        //     )}
        // </Row>
    );
};

FavouriteCoctails.propTypes = {
    coctalId: PropTypes.string,
    coctails: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default FavouriteCoctails;
