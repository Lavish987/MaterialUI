import './App.css';
import { Home } from './Home';
import {Routes,Route,BrowserRouter,} from "react-router-dom"
import { Task } from './Component/Task';
import { Toggler } from './Component/Toggle';
import { MuiTextfield } from './Component/MuiTextfield';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Task' element={<Task/>}/>
      <Route path='/Toggle' element={<Toggler/>}/>
      <Route path='/Textfield' element={<MuiTextfield/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
