import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Detail path="/:id" />
    </Router>
  );
}

export default App;
