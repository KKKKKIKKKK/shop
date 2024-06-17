import logo from './logo.svg';
import './App.css';
import {Button,Navbar,Container,Nav, useAccordionButton} from 'react-bootstrap';
import 배경이미지 from './img/bg.png'
import { useState } from "react";
import data from './data'; 
import {Routes, Route, Link} from 'react-router-dom'


function App() {

  let [shoes] = useState(data)
  return (
    <div className="App">

      <Routes>
        <Route path="/detail" element={<div>상세페이지임</div>}/>
      </Routes>


    

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
     
      {
        shoes.map((a,i)=>{
          return (
            <Card shoes={shoes[i]} i={i}></Card>
          )
        })

      }

       {/* <Card shoes={shoes[0]} i ={1}></Card>
      <Card shoes={shoes[1]} i ={2}></Card>
      <Card shoes={shoes[2]} i ={3}></Card> */}
    


        {/* <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
        <h4>{data[0].title}</h4>
        <p>{data[0].price}</p>
        </div>
         */}

         
        {/* <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
        <h4>{shoes[1].title}</h4>
        <p>{shoes[1].price}</p>
        </div>
         */}

        {/* <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
        <h4>{shoes[2].title}</h4>
        <p>{shoes[2].price}</p>
        </div> */}
      </div>
      </div>
      </div>
       
  );
}

function Card(props){

  return(
 
  <div className="col-md-4">
    <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1)+'.jpg'} width="80%"></img>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </div>
  
  )}

export default App;
