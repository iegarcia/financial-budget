import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./views/Home";
import OperationsContext from "../context/OperationsContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="text-center">Personal Finantial Data</h1>
      <hr />
      <BrowserRouter>
        <OperationsContext>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </OperationsContext>
      </BrowserRouter>
    </>
  );
};

export default App;
