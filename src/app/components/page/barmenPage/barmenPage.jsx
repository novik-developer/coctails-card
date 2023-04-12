import React from "react";
import PropTypes from "prop-types";
import ContainerWrapper from "../../common/container";
import { Spinner } from "react-bootstrap";
import { useQualities } from "../../../hooks/useQualities";
import { useBarmen } from "../../../hooks/useBarmens";
import BarmenCard from "../../ui/barmenCard";
import QualitiesCard from "../../ui/qualitiesCard";

const BarmenPage = ({ barmenId }) => {
    const { qualities } = useQualities();
    const { getUserById } = useBarmen();

    const barmen = getUserById(barmenId);
    console.log(qualities);
    console.log(barmen);
    // console.log(barmen.qualities);

    if (!barmen) {
        <Spinner />;
    }
    return (
        <ContainerWrapper>
            {barmen && (
                <div className="container">
                    <div className="row gutters-sm">
                        <BarmenCard barmen={barmen} />
                        <QualitiesCard qualities={barmen.qualities} />
                    </div>
                </div>
            )}
        </ContainerWrapper>
    );
};

BarmenPage.propTypes = {
    barmenId: PropTypes.string
};
export default BarmenPage;
