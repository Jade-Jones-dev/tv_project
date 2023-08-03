import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Show from './pages/Show';


function App() {
  const [shows, setShows] = useState([]);

	const fetchShows = () => {
		fetch("https://api.tvmaze.com/shows")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setShows(data);
			});
	};

	useEffect(() => {
		fetchShows();	
	},[]);

  console.log(shows)
  return (  
      <Router>
        <Routes>
          <Route path='/' element={<Home shows={shows}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/show' element={<Show/>}/>
        </Routes>
      </Router>
  );
}

export default App;
