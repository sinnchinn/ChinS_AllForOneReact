import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import nameTimeBg from '../assets/pochaccobg1.png'
import { Link } from 'react-router-dom';
import { NameAndTime } from '../services/DataService';
import { useState } from 'react'

export default function NameAndTimeComponent() {

  const [ name, setName ] = useState('');
  const [ time, setTime ] = useState('');
  const [ result, setResult ] = useState('');

  const nameAndTime = async () => {
    const response = await NameAndTime(name, time);
    setResult(response);
  }

  return (
    <div>
      <header style={{ backgroundImage: `url(${nameTimeBg})`, backgroundPosition:"bottom", height:"100vh"}}>
            
            <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
            <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='nameAndTimeResult'>input your name and what time you woke up! {"\n"}
            {result}</span>
            </div>

            <div className='centerFlex'>
                <input onChange={ (e) => setName(e.target.value) } style={{marginRight:"10px"}} className='inputStyle' type='text' placeholder='name'></input>
                <input onChange={ (e) => setTime(e.target.value) } className='inputStyle' type='text' placeholder='time'></input>
            </div>

            <div className='centerFlex'>
                <Button onClick={ () => nameAndTime() } style={{ width:"300px"}} className='nameAndTimeEnterBtn'> enter </Button>
            </div>

            <div>
                <Button as={Link} to={"/"} style={{width:"150px", marginTop:"280px", marginBottom:"35px", marginLeft:"30px"}} className='nameAndTimeEnterBtn'> home </Button>
            </div>

        </header>
    </div>
  )
}
