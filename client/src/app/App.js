import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import NavBar from "./components/ui/navBar/navBar";
import News from "./layouts/news";
import ContainerWrapper from "./components/common/container";
import Coctails from "./layouts/coctails";
import Header from "./components/common/Header/header";
import Login from "./layouts/login";
// import Footer from "./components/common/Footer/footer";
import CoctailEditPage from "./components/page/coctailEditPage/coctailEditPage";
import Barmens from "./layouts/barmens";
import BarmenProvider from "./hooks/useBarmens";
import { QualitiesProvaider } from "./hooks/useQualities";
import CoctailsProvider from "./hooks/useCoctails";
import BarsProvider from "./hooks/useBars";

function App() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <ContainerWrapper>
                <CoctailsProvider>
                    <QualitiesProvaider>
                        <BarsProvider>
                            <BarmenProvider>
                                <Switch>
                                    <Route
                                        path="/coctails/:coctalId?/edit"
                                        component={CoctailEditPage}
                                    />
                                    <Route
                                        path="/coctails/:coctalId?"
                                        component={Coctails}
                                    />
                                    <Route
                                        path="/users/:userId?"
                                        component={Users}
                                    />
                                    <Route
                                        path="/barmens/:barmenId?"
                                        component={Barmens}
                                    />
                                    <Route path="/news" component={News} />
                                    <Route
                                        path="/login/:type?"
                                        component={Login}
                                    />
                                    <Route
                                        path="/coctails"
                                        exact
                                        component={Coctails}
                                    />
                                    <Redirect to="/coctails" />
                                </Switch>
                            </BarmenProvider>
                        </BarsProvider>
                    </QualitiesProvaider>
                </CoctailsProvider>
            </ContainerWrapper>
            {/* <Footer /> */}
        </>
    );
}

export default App;
