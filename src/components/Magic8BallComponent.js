import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import magicBg from '../assets/badtzbg1.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Magic8Ball } from '../services/DataService';

export default function Magic8BallComponent() {

    const [ question, setQuestion ] = useState('');
    const [ result, setResult ] = useState('');

    const magic = async () => {
        const response = await Magic8Ball(question);
        setResult(response);
    }

  return (
    <div>
      <header style={{ backgroundImage: `url(${magicBg})`, backgroundPosition:"bottom", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"130vh"}}>
            
            <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
            <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='restPickerResult'>ask us a yes or no question and we'll tell you what you want to hear! {"\n"}{result}</span>
            </div>

            <div className='centerFlex'>
                <input onChange={ (e) => setQuestion(e.target.value) } className='inputStyle' type='text' placeholder='your question'></input>
            </div>

            <div className='centerFlex'>
                <Button onClick={ () => magic() } style={{ width:"300px"}} className='restPickerEnterBtn'> ask away! </Button>
            </div>

            <div>
                <Button as={Link} to={"/"} style={{width:"150px", marginTop:"280px", marginBottom:"35px", marginLeft:"30px"}} className='restPickerEnterBtn'> home </Button>
            </div>

        </header>
    </div>
  )
}
