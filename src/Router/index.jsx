import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";

function Router(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
