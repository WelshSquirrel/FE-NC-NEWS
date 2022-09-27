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
    <Articles />
    <Routes>
      <Route path='/articles' element={<ListArticles />} />
      <Route path="/articles/:category_name" element={<Articles />} />
    </Routes>
    <Footer />
    </div>  
    </>
  );
}

export default App;
