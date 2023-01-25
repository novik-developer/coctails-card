import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import NavBar from "./components/ui/navBar";
import News from "./layouts/news";
import ContainerWrapper from "./components/common/container";
import Coctails from "./layouts/coctails";
import Header from "./components/common/Header/header";
import Login from "./layouts/login";
import Footer from "./components/common/Footer/footer";

function App() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <ContainerWrapper>
                <Switch>
                    <Route path="/users/:userId?" component={Users} />
                    <Route path="/news" component={News} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/" exact component={Coctails} />
                    <Redirect to="/" />
                </Switch>
            </ContainerWrapper>
            <Footer />
        </>
    );
}

export default App;
