import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text-center">Personal Finantial Data</h1>
      <hr />
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route
                path="/add"
                element={
                  
                    <AddWarehouse editar={false} />
                  
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <ProtectedRoutes>
                    <AddWarehouse editar={true} />
                  </ProtectedRoutes>
                }
              /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
