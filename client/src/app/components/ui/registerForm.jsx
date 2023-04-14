import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { signUp } from "../../store/user";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

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
                message: "Имя обязателено к заполнению"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен к заполнению"
            },
            isCapitelSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете воспользоваться нашим сервисом без подтверждения лицензионного соглашения"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const isValid = validate();
        if (!isValid) return;
        console.log("data from registerForm", data);
        dispatch(signUp(data));
    };

    useEffect(() => {
        validate();
    }, [data]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <button
                type="submit"
                // disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                submit
            </button>
        </form>
    );
};

export default RegisterForm;
