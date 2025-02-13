import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesJobsIndicator from "./components/FavoritesJobsIndicator";
import { Container, Row, Col } from "react-bootstrap";
import Favorites from "./components/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col className="text-center">
            <FavoritesJobsIndicator />
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
