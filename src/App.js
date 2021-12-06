import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Row, Col} from 'react-bootstrap'
import Menu from "./components/menu.jsx"
import Login from './components/Login.jsx'
import Imagem from './components/Imagem.jsx'
function App() {
  return (
    <div className="App" style={{overflow:"hidden", backgroundColor:"black"}}>
      <Menu />
      <Row className = "landing" style={{backgroundColor:"black", border:"none"}}>
        <Col> <Login /> </Col>
        <Col> <Imagem /></Col>
      </Row>
    </div>
  );
}

export default App;
