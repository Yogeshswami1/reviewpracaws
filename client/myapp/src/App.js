import React ,{useState}from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import ReviewPage from './components/ReviewPage';
import HomePage from './components/HomePage';
// import AboutPage from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Prac from './components/Prac';
import CustomerFeedback from './components/CustomerFeedback';
import MarginPage from './components/MarginPage';
import Review from './components/Review';
import ReviewsDashboard from './components/ReviewsDashboard';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
       


        
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Navbar />} />
          {/* <Route path='/about' element={<AboutPage/>}/> */}
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/margins' element={<MarginPage/>}/>
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/login" />} />

          

          {/* <Route path='/services' element={<ContactPage/>}/> */}

          
          {/* <Route path="/about" element={<ReviewPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<ReviewPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



