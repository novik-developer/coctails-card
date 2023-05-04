import React from "react";
import PropTypes from "prop-types";
import ContainerWrapper from "../../common/container";
import { Spinner } from "react-bootstrap";
import BarmenCard from "../../ui/barmenCard";
import QualitiesCard from "../../ui/qualitiesCard";
import { useBarmen } from "../../../hooks/useBarmens";

const BarmenPage = ({ barmenId }) => {
    const { getUserById } = useBarmen();

    const barmen = getUserById(barmenId);

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
