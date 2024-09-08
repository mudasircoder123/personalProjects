import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Navv() {
 const[input,setInput] = useState('');
  const navigate = useNavigate();

const handleClick = (e) => {
e.preventDefault();
navigate(`/search/${input}`);
}

  
  return (
    <Navbar style={{ backgroundColor: '#CD5C5C', margin: '0', padding: '0', height: '90px', borderRadius: '15px' }}>
      <Container fluid>
        <Navbar.Brand style={{ fontSize: '27px', color: 'white', fontFamily: 'sans-serif' }}>Ecommerce store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" style={{ fontSize: '27px', color: 'white', fontFamily: 'sans-serif', marginLeft: '45px' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" style={{ fontSize: '27px', color: 'white', fontFamily: 'sans-serif', marginLeft: '45px' }}>Products</Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ fontSize: '27px', color: 'white', fontFamily: 'sans-serif', marginLeft: '45px' }}>Cart</Nav.Link>
            <Nav.Link disabled style={{ fontSize: '27px', color: 'white', fontFamily: 'sans-serif', marginLeft: '45px' }}>Signup</Nav.Link>
          </Nav>
          <Form className="d-flex" >
            <Form.Control type="search" placeholder="Search" className="me-2"  aria-label="Search" value={input}  onChange={(e) => setInput(e.target.value)}></Form.Control>
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;
