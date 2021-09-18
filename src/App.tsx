import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@styles/fontawesome-free-5.15.3-web/css/all.css";
import "@styles/main.scss";
import "@styles/App.css";
import BookInfo from "./pages/bookInfo";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/works/:ol" component={BookInfo} />
          <Route path="*" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
