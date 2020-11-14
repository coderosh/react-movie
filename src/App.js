import React from "react";
import { Router } from "@reach/router";
import { ReactQueryDevtools } from "react-query-devtools";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Home path="/" />
        <Detail path="/:id" />
      </Router>
      <ReactQueryDevtools initialIsOpen={true} />
    </React.Fragment>
  );
}

export default App;
