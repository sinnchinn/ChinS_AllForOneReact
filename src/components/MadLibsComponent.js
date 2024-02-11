import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import madlibsBg from '../assets/mymelodybg1.jpg'
import { Link } from 'react-router-dom';
import { MadLibs } from '../services/DataService';
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function MadLibsComponent() {

    const [name, setName] = useState('');
    const [adj1, setAdj1] = useState('');
    const [verb1, setVerb1] = useState('');
    const [noun1, setNoun1] = useState('');
    const [verb2, setVerb2] = useState('');
    const [noun2, setNoun2] = useState('');
    const [adj2, setAdj2] = useState('');
    const [adj3, setAdj3] = useState('');
    const [noun3, setNoun3] = useState('');
    const [name2, setName2] = useState('');
    const [adj4, setAdj4] = useState('');
    const [result, setResult] = useState('');

    const madLibs = async () => {
        const response = await MadLibs(name, adj1, verb1, noun1, verb2, noun2, adj2, adj3, noun3, name2, adj4);
        setResult(response);
    }

    return (
        <div>
            <header style={{ backgroundImage: `url(${madlibsBg})`, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "130vh" }}>

                <div className='centerFlex' style={{ marginLeft: "5px", marginRight: "5px" }}>
                    <span style={{ whiteSpace: "pre-wrap", textAlign: "center" }} className='madlibResult'>madlib generator!{"\n"}{result}</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                    <Row >
                        <Col lg={4} md={4} sm={4}>
                            <input onChange={(e) => setName(e.target.value)} className='inputStyle' type='text' placeholder='your name'></input>
                        </Col>

                        <Col lg={4} md={4} sm={4}>
                            <input onChange={(e) => setAdj1(e.target.value)} className='inputStyle' type='text' placeholder='adjective 1'></input>
                        </Col>

                        <Col lg={4} md={4} sm={4}>
                            <input onChange={(e) => setVerb1(e.target.value)} className='inputStyle' type='text' placeholder='verb 1'></input>
                        </Col>
                    </Row>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <input onChange={(e) => setNoun1(e.target.value)} className='inputStyle' type='text' placeholder='noun 1'></input>
                        </Col>

                        <Col lg={4} md={4} sm={12}>
                            <input onChange={(e) => setVerb2(e.target.value)} className='inputStyle' type='text' placeholder='verb 2'></input>

                        </Col>

                        <Col lg={4} md={4} sm={12}>
                            <input onChange={(e) => setNoun2(e.target.value)} className='inputStyle' type='text' placeholder='noun 2'></input>

                        </Col>
                    </Row>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <Row>
                        <Col lg={4} md={4} sm={1}>
                            <input onChange={(e) => setAdj2(e.target.value)} className='inputStyle' type='text' placeholder='adjective 2'></input>

                        </Col>

                        <Col lg={4} md={4} sm={1}>
                            <input onChange={(e) => setAdj3(e.target.value)} className='inputStyle' type='text' placeholder='adjective 3'></input>

                        </Col>

                        <Col lg={4} md={4} sm={1}>
                            <input onChange={(e) => setNoun3(e.target.value)} className='inputStyle' type='text' placeholder='noun 3'></input>

                        </Col>
                    </Row>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <input onChange={(e) => setName2(e.target.value)} className='inputStyle' type='text' placeholder='another name'></input>

                        </Col>

                        <Col lg={6} md={6} sm={6}>
                            <input onChange={(e) => setAdj4(e.target.value)} className='inputStyle' type='text' placeholder='adjective 4'></input>

                        </Col>
                    </Row>
                </div>

                <div className='centerFlex'>
                    <Button onClick={() => madLibs()} style={{ width: "300px" }} className='madlibEnterBtn'> start story </Button>
                </div>

                <div>
                    <Button as={Link} to={"/"} style={{ width: "150px", marginLeft: "30px" }} className='madlibEnterBtn'> home </Button>
                </div>

            </header>
        </div>
    )
}
