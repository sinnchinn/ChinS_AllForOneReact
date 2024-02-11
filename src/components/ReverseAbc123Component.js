import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import revAbc123Bg from '../assets/tuxsambg1.png'
import { Link } from 'react-router-dom';
import { ReverseAbc } from '../services/DataService';
import { useState } from 'react'

export default function ReverseAbc123Component() {
  
  const [abc123, setAbc123] = useState('');
  const [result, setResult] = useState('');

  const getAbc123 = async () => {
      const response = await ReverseAbc(abc123);
      setResult(response);
  }

  return (
    <div>
      <header style={{ backgroundImage: `url(${revAbc123Bg})`, backgroundPosition:"bottom", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"130vh"}}>
            
            <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
            <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='revAbcResult'>input a sequence of numbers and letters and we'll reverse it for you!
             {"\n"}{result}</span>
            </div>

            <div className='centerFlex'>
                <input onChange={(e) => setAbc123(e.target.value)} className='inputStyle' type='text' placeholder='letters & numbers'></input>
            </div>

            <div className='centerFlex'>
                <Button onClick={() => getAbc123()} style={{ width:"300px"}} className='revAbcEnterBtn'> reverse </Button>
            </div>

            <div>
                <Button as={Link} to={"/"} style={{width:"150px", marginTop:"280px", marginBottom:"35px", marginLeft:"30px"}} className='revAbcEnterBtn'> home </Button>
            </div>

        </header>
    </div>
  )
}
