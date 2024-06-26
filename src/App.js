import logo from './logo.svg';
import './App.css';
import {Button,Navbar,Container,Nav, useAccordionButton} from 'react-bootstrap';
import 배경이미지 from './img/bg.png'
import { useState } from "react";
import data from './data.js'; 
import {Routes, Route, Link, useNavigate , Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'


function App() {

  let [shoes] = useState(data)

  let navigate = useNavigate();

  return (
    <div className="App">

      

 
  
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>



      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
            <div className="row">
              { shoes.map((a, i)=>{
                return <Card shoes={shoes[i]} i={i}></Card>
                })}
            </div>
            </div>
          </>
        }/>
        <Route path="/detail" element={<Detail/>}/>

      </Routes>

    
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
