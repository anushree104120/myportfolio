// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Mobilenav from './components/Mobilenav';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Techstack from './pages/Techstack';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <Mobilenav></Mobilenav>
      <Layout></Layout>
      <div className="container">
      <About></About>
      <Education></Education>
      <Techstack></Techstack>
      <Project></Project>
      <Experience></Experience>
      <Contact></Contact>
      </div>
      <div className="footer mb-3 ms-3">
        <h6 className="text-center">Made with ❤️ Anu Shree &copy; 2024</h6>
      </div>
      <ScrollToTop smooth style={{backgroundColor:"lightgray", borderRadius:"80px"}} />
      
    </div>
  );
}

export default App;
