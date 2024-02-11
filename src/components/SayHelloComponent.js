import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import sayHelloBg from '../assets/gudetamabg1.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import {SayHello} from '../services/DataService.js'
import Row from 'react-bootstrap/Row'

export default function SayHelloComponent() {

    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const getName = async () => {
        const response = await SayHello(name);
        setResult(response);
    }

    return (
        <div>
            <header style={{ backgroundImage: `url(${sayHelloBg})`, height:"100vh"}}>

                <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>

                    <span id='spanResult' className='sayHelloResult' style={{whiteSpace:"pre-wrap", textAlign:"center"}}>enter your name! 
                    {"\n"}{result}</span>

                </div>

                <div className='centerFlex'>
                    <input onChange={(e) => setName(e.target.value)} className='inputStyle' type='text' placeholder='your name'></input>
                </div>

                <div onClick={() => getName()} className='centerFlex'>
                    <Button style={{ width: "300px" }} className='sayHelloEnterBtn'> enter </Button>
                </div>

                <div>
                    <Button as={Link} to={"/"} style={{ width: "150px", marginTop: "280px", marginBottom: "35px", marginLeft: "30px" }} className='sayHelloEnterBtn'> home </Button>
                </div>


                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </header>

            <header style={{ backgroundImage: `url(${sayHelloBg})`}}>

                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>

            </header>
        </div>
        
    )
}
