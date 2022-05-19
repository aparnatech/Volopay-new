import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainCards from "./main/components/cards/MainCards";
import LogoSpinner from "./main/components/ui/loader";
import Header from "./main/components/ui/Header";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LogoSpinner />}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainCards} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
