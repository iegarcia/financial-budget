import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddOperation from "./views/AddOperation";

const App = () => {
  return (
    <>
      <h1 className="text-center">Personal Finantial Data</h1>
      <hr />
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddOperation />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
