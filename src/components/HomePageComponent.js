import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeBg from '../assets/bg.png'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function HomePageComponent() {
  return (
      <div className=''>
        <header style={{ backgroundImage: `url(${HomeBg})`}}>

          <Container>
            <Row>
              <Col>
                <div style={{display:"flex", justifyContent:"center", marginLeft:"5px", marginRight:"5px", height: "130vh" }}>
                <Badge md={10} sm={1} className='homeBadge'>
                  ALL FOR ONE
                </Badge>
                </div>
              </Col>
            </Row>

            <Row  style={{marginTop:"60px"}}>              
              <Col lg={4} md={12} sm={1} style={{display:"flex", justifyContent:"center"}}>

                <Button as={Link} to={'sayhello'} className='homeBtn'> Say Hello </Button>
                
              </Col>

              <Col lg={4}   sm={1} >
              </Col>   

              <Col lg={4}  md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
                <Button as={Link} to={'rev123'} className='homeBtn'> Reverse It (123)</Button>
              </Col>              
            </Row>

            
            <Row  style={{marginTop:"30px"}}>              
              <Col lg={4}  md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
                <Button as={Link} to={'nameandtime'} className='homeBtn'> Name & time </Button>
              </Col>

              <Col lg={4} md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
              <Button as={Link} to={'oddoreven'} className='homeBtn'> odd or even </Button>
              </Col>   

              <Col lg={4} md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
                <Button as={Link} to={'revabc123'} className='homeBtn'> Reverse It (abc123)</Button>
              </Col>              
            </Row>

            <Row  style={{marginTop:"30px"}}>              
              <Col lg={4} md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
                <Button as={Link} to={'greaterorless'} className='homeBtn'> greater or less </Button>
              </Col>

              <Col lg={4} md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
              <Button as={Link} to={'add2nums'}  className='homeBtn'> add 2 numbers </Button>
              </Col>   

              <Col lg={4} md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
                <Button as={Link} to={'magic8'}  className='homeBtn'> magic 8 ball </Button>
              </Col>              
            </Row>

            <Row  style={{marginTop:"30px", marginBottom:"135px"}}>              
              <Col lg={4} md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
                <Button as={Link} to={'madlibs'}  className='homeBtn'> madlib </Button>
              </Col>

              <Col>
              </Col>   

              <Col lg={4} md={12} sm={1}  style={{display:"flex", justifyContent:"center"}}>
                <Button as={Link} to={'restpicker'} className='homeBtn'> restaraunt picker</Button>
              </Col>              
            </Row>

            <Row>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
            </Row>

          </Container>

        </header>

    </div>
  )
}
