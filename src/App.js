import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './components/nabvar';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Alumni from './pages/alumni';
import Contact from './pages/contact';
import Events from './pages/events';
import Faculty from './pages/faculty';
import Students from './pages/student';

function App() {
  return (
    <BrowserRouter>
      {/* <Hlogo /> */}
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/alumni" element={<Alumni />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/faculty" element={<Faculty />}></Route>
      <Route path="/students" element={<Students />}></Route>
      </Routes>
      {/* <Home /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
