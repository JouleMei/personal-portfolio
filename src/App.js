import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    <div>
      <Routes>
        <route path="/about" element={}></route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
