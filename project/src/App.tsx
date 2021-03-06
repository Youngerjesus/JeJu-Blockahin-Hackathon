import React from 'react';
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import SignUp from "./routes/SignUp";
import './App.scss'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

function App() {

    return (
      <BrowserRouter>
        <GlobalStyles />
        <div className="App">
          <Nav />
          <Toast />
          <Switch>
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
}

export default App;
