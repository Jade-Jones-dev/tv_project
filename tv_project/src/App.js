import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Show from './pages/Show';


function App() {
  return (  
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/show' element={<Show/>}/>
        </Routes>
      </Router>
  );
}

export default App;
