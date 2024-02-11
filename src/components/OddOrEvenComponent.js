import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import oddBg from '../assets/cinammorolbg1.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { OddOrEven } from '../services/DataService';

export default function OddOrEvenComponent() {

  const [ num, setNum ] = useState(0);
  const [ result, setResult ] = useState('');

  const oddOrEven = async () => {
    const response = await OddOrEven(num);
    setResult(response);
  }

  return (
    <div>
      <header style={{ backgroundImage: `url(${oddBg})`, backgroundPosition:"bottom", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100vh"}}>
            
            <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
            <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='oddEvenResult'>enter a number and we'll tell you if it's odd or even! {"\n"}
            {result}</span>
            </div>

            <div className='centerFlex'>
                <input onChange={ (e) => setNum(e.target.value) } className='inputStyle' type='number' placeholder='numbers'></input>
            </div>

            <div className='centerFlex'>
                <Button onClick={ () => oddOrEven() } style={{ width:"300px"}} className='oddEvenEnterBtn'> enter </Button>
            </div>

            <div>
                <Button as={Link} to={"/"} style={{width:"150px", marginTop:"280px", marginBottom:"35px", marginLeft:"30px"}} className='oddEvenEnterBtn'> home </Button>
            </div>

        </header>
    </div>
  )
}
