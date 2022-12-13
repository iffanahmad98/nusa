import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function NavigationBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img src="./assets/asset.png" width={500}></img></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            EN/USD <a href="#login">^</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;