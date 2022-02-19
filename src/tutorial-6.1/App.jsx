import { Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import { Routes, Route, useParams, NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/">React Blog</Link>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link eventKey="/home" to="/" as={NavLink}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/home" to="/about" as={NavLink}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/home" to="/profile" as={NavLink}>
            Профиль
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

const Cards = () => {
  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
          <Card.Body>
            <Card.Title>
              <Link to="/post/1">Card title</Link>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const About = () => {
  return (
    <Card>
      <Card.Body>Это мой личный сайт!</Card.Body>
    </Card>
  );
};

const Post = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Статья №{id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        distinctio fuga animi aliquam sit id veritatis, doloribus ducimus quas,
        dignissimos non minima quia amet possimus? Impedit nemo ducimus fuga
        rem!
      </p>
      <Link to="/">
        <button>Назад</button>
      </Link>
    </div>
  );
};

const NotFound = () => {
  return (
    <Card>
      <Card.Body>404</Card.Body>
    </Card>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
}
