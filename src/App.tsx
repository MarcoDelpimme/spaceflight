import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchComponent from "./components/FetchComponent";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetailsOK from "./components/Details";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <Container fluid className="mx-0 px-0">
              <FetchComponent></FetchComponent>
            </Container>
          }
        />
        <Route path="/:articleId" element={<ArticleDetailsOK />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
