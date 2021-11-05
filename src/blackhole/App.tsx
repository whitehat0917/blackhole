import React from "react";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./Pages/MainPage"
import AirDrop from "./Pages/AirDrop"
import Header from './Component/Header'
import Footer from './Component/Footer'

import {Container} from './UtilComponents/Container'
import {MainSection} from './UtilComponents/Utils'

import HeaderConnectModal from './Component/HeaderConnectModal'

function App() {
  return (
    <BrowserRouter>
        <Container>
            <Header/>
            <MainSection>
              <Switch>
                <Route exact path="/airdrop" component={AirDrop} />
                <Route exact path="/" component={MainPage} />
              </Switch>
            <HeaderConnectModal/>

            </MainSection>
            <Footer/>
        </Container>
    </BrowserRouter>
  );
}

export default App;
