import logo from './logo.svg';
import './App.css';
import {Button,Navbar,Container,Nav, useAccordionButton} from 'react-bootstrap';
import 배경이미지 from './img/bg.png'
import { useState } from "react";
import data from './data'; 


function App() {

  let [shoes] = useState()
  return (
    <div className="App">
    

      {/* <Button variant="primary">Primary</Button> */}

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 

      <div className="main-bg"></div>
      {/* 상품 레이아웃3개 만들기 */}
      
      <div className="container">
      <div className="row">
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
        <h4>상품명</h4>
        <p>상품설명</p>
        </div>
        
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
        <h4>상품명</h4>
        <p>상품설명</p>
        </div>
        
        <div className="col-md-4">

        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
        <h4>상품명</h4>
        <p>상품설명</p>
        </div>
      </div>
      </div>
      </div>
       
  );
}

export default App;
