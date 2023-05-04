import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import logOut from "./layouts/logOut";
import NavBar from "./components/ui/navBar/navBar";
import News from "./layouts/news";
import ContainerWrapper from "./components/common/container";
import Coctails from "./layouts/coctails";
import Header from "./components/common/Header/header";
import Login from "./layouts/login";
// import Footer from "./components/common/Footer/footer";
import Barmens from "./layouts/barmens";
import BarmenProvider from "./hooks/useBarmens";
import CoctailsProvider from "./hooks/useCoctails";
import BarmenEditPage from "./components/page/barmenEditPage/barmenEditPage";

function App() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <ContainerWrapper>
                <CoctailsProvider>
                    <BarmenProvider>
                        <Switch>
                            <Route
                                path="/coctails/:coctalId?"
                                component={Coctails}
                            />
                            <Route path="/users/:userId?" component={Users} />
                            <Route
                                path="/barmens/:barmenId?/edit"
                                component={BarmenEditPage}
                            />
                            <Route
                                path="/barmens/:barmenId?"
                                component={Barmens}
                            />

                            <Route path="/news" component={News} />
                            <Route path="/login/:type?" component={Login} />
                            <Route path="/logout" component={logOut} />
                            <Route
                                path="/coctails"
                                exact
                                component={Coctails}
                            />
                            <Redirect to="/coctails" />
                        </Switch>
                    </BarmenProvider>
                </CoctailsProvider>
            </ContainerWrapper>
            {/* <Footer /> */}
        </>
    );
}

export default App;
