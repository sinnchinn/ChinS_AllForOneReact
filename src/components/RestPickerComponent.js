import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import restarauntBg from '../assets/rilakkumabg1.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { RestPicker } from '../services/DataService';

export default function RestPickerComponent() {

  const [ choice, setChoice ] = useState('');
  const [ result, setResult ] = useState('');

  const pickRest = async () => {
    const response = await RestPicker(choice);
    setResult(response);
  }

  return (
    <div>
      <header style={{ backgroundImage: `url(${restarauntBg})`, backgroundPosition:"bottom", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"130vh"}}>
            
            <div className='centerFlex' style={{marginLeft:"5px", marginRight:"5px"}}>
            <span style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='restPickerResult'>input asian, chicken, or italian and we'll tell you where you should eat based on those categories! {"\n"}
            {result}</span>
            </div>

            <div className='centerFlex'>
                <input onChange={ (e) => setChoice(e.target.value) } className='inputStyle' type='text' placeholder='asian, chicken or italian'></input>
            </div>

            <div className='centerFlex'>
                <Button onClick={ () => pickRest() } style={{ width:"300px"}} className='restPickerEnterBtn'> choose for me </Button>
            </div>

            <div>
                <Button as={Link} to={"/"} style={{width:"150px", marginTop:"280px", marginBottom:"35px", marginLeft:"30px"}} className='restPickerEnterBtn'> home </Button>
            </div>

        </header>
    </div>
  )
}
