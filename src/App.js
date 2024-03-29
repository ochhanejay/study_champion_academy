import logo from './logo.svg';
import './App.css';
import './style.css';
import Navbar from './components/navbar/navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes } from 'react-router-dom';
import Course from './components/courses/courses';
import Head from './components/first/header1';
import Contact from './components/contact/contact';
import Faculty from './components/faculty/faculty';
import Footer from './components/footer/footer';
import Welcome from './components/welcome/welcome';
import YouHome from './components/youtube/youtubeHome';
import WhyStudy from './components/about_us/whyStudy';
import Navnew from './components/navbar/nav2';
import AboutStudy from './components/about_us/aboutStudy';
import Patwari from './components/patwari';
import { Telegram } from '@mui/icons-material';
import TestSeries from './components/testSeries';

function App() {
  return (
    <div className="App backGround">
  
     <Navnew></Navnew>
     
     <Routes>
     <Route path='/' element={
      <>
      <Head></Head>
      <Welcome></Welcome>
      <Patwari></Patwari>
      <TestSeries></TestSeries>
      <YouHome></YouHome>
      <Faculty></Faculty>
      <Course></Course>
      <Contact></Contact>
      
      </>
      }></Route>
     <Route path='/whyStudy' element={<WhyStudy></WhyStudy>}></Route>
     <Route path='/testSeries' element={<TestSeries></TestSeries>}></Route>
     <Route path='/courses' element={<Course></Course>}></Route>
     <Route path='/contact' element={<Contact></Contact>}></Route>
     <Route path='/header1' element={<Head></Head>}></Route>
     <Route path='/faculty' element={<Faculty></Faculty>}></Route>
   
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
