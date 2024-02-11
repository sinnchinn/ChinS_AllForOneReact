import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import twoNumsBg from '../assets/hellokittybg.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { AddNums } from '../services/DataService';

export default function Add2NumsComponent() {

  const [ numOne, setNumOne ] = useState(0);
  const [ numTwo, setNumTwo ] = useState(0);
  const [ result, setResult ] = useState('');

  const addNums = async () => {
      const response = await AddNums(numOne, numTwo);
      setResult(response);
  }

  return (
    <div>
      <header style={{ backgroundImage: `url(${twoNumsBg})`, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"130vh"}}>
                
                <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
                    <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='addResult'>input two numbers and we'll give you the sum!{"\n"}{result}</span>
                </div>

                <div className='centerFlex'>
                    <input onChange={ (e) => setNumOne(e.target.value) } style={{ marginRight: "10px" }} className='inputStyle' type='number' placeholder='first number'></input>
                    <input onChange={ (e) => setNumTwo(e.target.value) } className='inputStyle' type='number' placeholder='second number'></input>
                </div>

                <div className='centerFlex'>
                    <Button onClick={ () => addNums() } style={{ width: "300px" }} className='addEnterBtn'> enter </Button>
                </div>

                <div>
                    <Button as={Link} to={"/"} style={{ width: "150px", marginTop: "280px", marginBottom: "35px", marginLeft: "30px" }} className='addEnterBtn'> home </Button>
                </div>

            </header>
    </div>
  )
}
