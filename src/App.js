import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar';
import Articles from './components/Articles';
import IndividualArticle from './components/IndividualArticle';



function App() {
  
  return (
    <>
    <div className="App">
    <Header />
    <NavBar />
    <Routes>
      <Route path='/articles' element={<Articles />}/>
      <Route path="/articles/:topic" element={<Articles />} />
      <Route path="/article/:article_id" element={<IndividualArticle />} />
    </Routes>
    <Footer />
    </div>  
    </>
  );
}

export default App;
