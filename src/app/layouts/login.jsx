import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ContainerWrapper from "../components/common/container";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "Login"
    );
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <>
            <ContainerWrapper>
                <div className="row">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4">Register</h3>
                            <p>
                                Already have account?
                                <a role="button" onClick={toggleFormType}>
                                    Sign In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            <p>
                                Dont have account?
                                <a role="button" onClick={toggleFormType}>
                                    Sign up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </ContainerWrapper>
        </>
    );
};

export default Login;
