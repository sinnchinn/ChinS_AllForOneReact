import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import greaterBg from '../assets/kuromibg2.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { GreaterOrLess } from '../services/DataService';

export default function GreaterOrLessComponent() {

    const [ numOne, setNumOne ] = useState(0);
    const [ numTwo, setNumTwo ] = useState(0);
    const [ result, setResult ] = useState('');

    const greaterOrLess = async () => {
        const response = await GreaterOrLess(numOne, numTwo);
        setResult(response);
    }

    return (
        <div>
            <header style={{ backgroundImage: `url(${greaterBg})`, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100vh" }}>
                
                <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
                    <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='greaterResult'>input two numbers and we'll tell you which is greater than or less than!{"\n"}{result}</span>
                </div>

                <div className='centerFlex'>
                    <input onChange={ (e) => setNumOne(e.target.value) } style={{ marginRight: "10px" }} className='inputStyle' type='number' placeholder='first number'></input>
                    <input onChange={ (e) => setNumTwo(e.target.value) } className='inputStyle' type='number' placeholder='second number'></input>
                </div>

                <div className='centerFlex'>
                    <Button onClick={ () => greaterOrLess() } style={{ width: "300px" }} className='greaterEnterBtn'> enter </Button>
                </div>

                <div>
                    <Button as={Link} to={"/"} style={{ width: "150px", marginTop: "280px", marginBottom: "35px", marginLeft: "30px" }} className='greaterEnterBtn'> home </Button>
                </div>

            </header>
        </div>
    )
}
