import {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import useShowsContext from './hooks/useShowsContext';
import './App.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Show from './pages/Show';


function App( ) {
const {fetchShows} = useShowsContext()

	useEffect(() => {
		fetchShows();	
	},[]);

  
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
