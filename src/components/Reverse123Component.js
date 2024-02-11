import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import rev123Bg from '../assets/pompombg1.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Reverse123 } from '../services/DataService';

export default function Reverse123Component() {

    const [ nums, setNums ] = useState(0);
    const [ result, setResult ] = useState('');

    const get123 = async () => {
        const response = await Reverse123(nums);
        setResult(response);
    }

  return (
    <div>
    
        <header style={{ backgroundImage: `url(${rev123Bg})`, backgroundPosition:"bottom", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"130vh"}}>
            
            <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
            <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='rev123Result'>input a sequence of numbers and we'll reverse it for you! {"\n"}
            {result}</span>
            </div>

            <div className='centerFlex'>
                <input onChange={ (e) => setNums(e.target.value)} className='inputStyle' type='number' placeholder='numbers'></input>
            </div>

            <div className='centerFlex'>
                <Button onClick={ () => get123() } style={{ width:"300px"}} className='rev123EnterBtn'> reverse </Button>
            </div>

            <div>
                <Button as={Link} to={"/"} style={{width:"150px", marginTop:"280px", marginBottom:"35px", marginLeft:"30px"}} className='rev123EnterBtn'> home </Button>
            </div>

        </header>
    
    </div>
  )
}
