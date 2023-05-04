import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import MultiSelectField from "../../common/form/multiSelectField";
import {
    getQualitiesList,
    getQualitiesLoadingStatus
} from "../../../store/qualities";
import { useSelector } from "react-redux";
import { validator } from "../../../utils/validator";
import { useBarmen } from "../../../hooks/useBarmens";
import {
    useHistory,
    useParams
} from "react-router-dom/cjs/react-router-dom.min";
import API from "../../../api";

const BarmenEditPage = () => {
    const history = useHistory();
    const params = useParams();
    const { barmenId } = params;
    const { getBarmensId } = useBarmen();

    const currentBarmen = getBarmensId(barmenId);

    const qualities = useSelector(getQualitiesList());
    const qualitiesLoading = useSelector(getQualitiesLoadingStatus());
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    const qualitiesList = qualities.map((q) => ({
        label: q.name,
        value: q._id,
        color: q.color
    }));
    const getQualities = (qualArray) => {
        const qualitiesArray = [];
        for (const elem of qualArray) {
            for (const quality of qualities) {
                if (elem.name === quality.name) {
                    qualitiesArray.push(quality);
                    break;
                }
            }
        }
        return qualitiesArray;
    };

    const transformQualities = (qualArray) => {
        const qualitiesArrayNew = [];
        for (const elem of qualArray) {
            for (const quality of qualities) {
                if (elem.value === quality._id) {
                    qualitiesArrayNew.push({
                        _id: elem.value,
                        name: elem.label,
                        color: elem.color
                    });
                    break;
                }
            }
        }
        return qualitiesArrayNew;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        API.barmens
            .update(barmenId, {
                ...data,
                qualities: transformQualities(data.qualities),
                bar: { _id: barmenId, name: data.bar }
            })
            .then((data) => history.push(`/barmens/${data._id}`));
    };
    const transformData = (data) => {
        return getQualities(data).map((qual) => ({
            label: qual.name,
            value: qual._id,
            color: qual.color
        }));
    };
    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    useEffect(() => {
        if (!qualitiesLoading && currentBarmen && !data) {
            setIsLoading(true);
            setData({
                ...currentBarmen,
                qualities: transformData(currentBarmen.qualities),
                bar: currentBarmen.bar.name
            });
        }
    }, [qualitiesLoading, currentBarmen, data]);

    useEffect(() => {
        if (barmenId) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Еmail обязателен к заполнению"
            },
            isEmail: {
                message: "Еmail введен не коректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        validate();
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    // if (!data && isLoading) return " ...loading";

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <TextField
                                label="Город"
                                name="city"
                                value={data.city}
                                onChange={handleChange}
                                error={errors.city}
                            />
                            <TextField
                                label="Бар"
                                name="bar"
                                value={data.bar}
                                onChange={handleChange}
                                error={errors.bar}
                            />
                            <MultiSelectField
                                defaultValue={data.qualities}
                                options={qualitiesList}
                                onChange={handleChange}
                                name="qualities"
                                label="Выберите ваши качества"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        "........loading"
                    )}
                </div>
            </div>
        </div>
    );
};

export default BarmenEditPage;
