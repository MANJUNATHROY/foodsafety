import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image2 from './components/navbar/images/image2.png'
import image1 from './components/navbar/images/image1.png'
import image3 from './components/navbar/images/image3.png'
import image4 from './components/navbar/images/image4.png'
import image5 from './components/navbar/images/image5.png'
import image6 from './components/navbar/images/image6.png'
import image7 from './components/navbar/images/image7.png'
import image8 from './components/navbar/images/image8.png'

import './App.css'
function App() {
  return (
    <>
      <h1 className="heading1">1. Header,Nav Bar,Slider</h1>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img src={image2} /></Navbar.Brand>
          <Nav className="ml-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Co-Traveller</Nav.Link>
            <Nav.Link href="#pricing">FAQs</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
            <Nav.Link href="#pricing">=<br></br></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='header'>
        <h2 className="heading2" >Empowering society<br></br> through Science</h2>
        <h5 className="heading3">Food Lab is one point solution for all<br></br> food safety needs</h5><br></br>

        <button className="btn1">Get Started</button>
      </div>
      <div className="intro">
        <h1 className="heading4">2. Intro Section</h1>
      </div>
      <img src={image1} className="image1" />
      <h5 className="heading5">Food Lab Food Safety Services</h5>
      <img src={image8} className="image8" />
      <span className="supremediv">
        <div className="maindiv">

          <div className="firstdiv">
            <img src={image5} className="image5" />
          </div>
          <div className='seconddiv'>
            <img src={image6} className="image6" />
          </div>


        </div>
        <div className="subdiv">
          <div className="thirddiv">
            <table>
              <tbody>
                <tr>
                  <td><img src={image3} className="image3" /></td>
                  <td rowSpan={2}> <img src={image4} className="image4" /></td>
                </tr>
                <tr>
                  <td><img src={image7} className="image7" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <p className="para1">Aperiam quia sapiente vel consequatur<br></br> consequatur omnis sed autem quae. Ipsa et<br></br> minus consequatur vero et doloribus. Ex error<br></br> illum consequatur amet ea occaecati odit. Quia <br></br>similique dolorum officiis distinctio magnam ut<br></br> facilis. Et dolore est inventore ea et molestiae<br></br> earum.</p>
      </span>
      <div className="footer">
        <h1 className="heading6">3. Footer Section</h1>
      </div>
      <div className="parentdiv2">

        <div className='parentdiv3'>
          <img src={image2} className="image9" />
          <h6>203,Abc road,xyz<br></br><br></br></h6>
          <p><b>Phone</b>: +91 44 4269 2288</p>
          <p><b>Email</b>:admin@parikshan.net.in</p>
        </div>
        <div className="parentdiv4">
          <Table hover size="sm" className="table1">
            <thead>
              <tr>
                <th>Useful Link</th>
                <th></th>
                <th>Site Map</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Home</td>
                <td>Support</td>
                <td>Home</td>
              </tr>
              <tr>
                <td>Services</td>
                <td>Contact Us</td>
                <td>Services</td>
              </tr>
              <tr>
                <td>Training registration</td>
                <td></td>
                <td>Training Registration</td>
              </tr>
              <tr>
                <td>Home</td>
                <td></td>
                <td>Home</td>
              </tr>
              <tr>
                <td>Services</td>
                <td></td>
                <td>Services</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Training Registration</td>
              </tr>
            </tbody>
          </Table>
          <Table className="table2">
            <tbody>
              <tr colspan={2}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Food Labs Inc Copyright 2022.All Rights Reserved
              </tr>
            </tbody>
          </Table>
        </div>

      </div>
    </>
  );
}

export default App;
