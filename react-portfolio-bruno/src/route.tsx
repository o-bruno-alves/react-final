
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import WorkInProgress from './pages/WorkInProgress';
import Contact from './pages/Contact';

const RouteBetweenPages = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/WorkInProgress' element={<WorkInProgress/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
  );
}

export default RouteBetweenPages;