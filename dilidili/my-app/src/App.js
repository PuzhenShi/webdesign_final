import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
return(
  <Router>
  <NavBar />
  
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/jobs' element={<Jobs />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
  </Routes>
  <Footer />
</Router>
);
}

export default App;
