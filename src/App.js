import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ListArticles from './components/ListAritcles';
import NavBar from './components/NavBar';
import Articles from './components/Articles';


function App() {
  
  return (
    <>
    <div className="App">
    <Header />
    <NavBar />
    <Routes>
      <Route path='/articles'>
        <Route index element={<Articles topic="No Category" />} />
        <Route path="football" element={<Articles topic="football"/>} />
        <Route path="cooking" element={<Articles topic="cooking"/>} />
        <Route path="coding" element={<Articles topic="coding"/>} />
      </Route>
    </Routes>
    <Footer />
    </div>  
    </>
  );
}

export default App;
