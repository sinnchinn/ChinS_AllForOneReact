import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import SayHelloComponent from './components/SayHelloComponent';
import Reverse123Component from './components/Reverse123Component'
import ReverseAbc123Component from './components/ReverseAbc123Component'
import RestPickerComponent from './components/RestPickerComponent'
import OddOrevenComponent from './components/OddOrEvenComponent'
import NameAndTimeComponent from './components/NameAndTimeComponent'
import Magic8BallComponent from './components/Magic8BallComponent'
import MadLibsComponent from './components/MadLibsComponent'
import GreaterOrLessComponent from './components/GreaterOrLessComponent'
import NavComponent from './components/NavComponent';
import Add2NumsComponent from './components/Add2NumsComponent';

function App() {
  return (

    <BrowserRouter>
    
    <NavComponent/>
    
    <Routes>

      <Route path='/' element={ <HomePageComponent/> } />
      <Route path='sayhello' element={ <SayHelloComponent/> } />
      <Route path='rev123' element={ <Reverse123Component/> } />
      <Route path='revabc123' element={ <ReverseAbc123Component/> } />
      <Route path='restpicker' element={ <RestPickerComponent/> } />
      <Route path='oddoreven' element={ <OddOrevenComponent/> } />
      <Route path='nameandtime' element={ <NameAndTimeComponent/> } />
      <Route path='magic8' element={ <Magic8BallComponent/> } />
      <Route path='madlibs' element={ <MadLibsComponent/> } />
      <Route path='greaterorless' element={ <GreaterOrLessComponent/> } />
      <Route path='add2nums' element={ <Add2NumsComponent/> } />

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
