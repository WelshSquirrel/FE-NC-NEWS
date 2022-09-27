import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ListArticles from './components/ListAritcles';
import NavBar from './components/NavBar';


function App() {
  
  return (
    <>
    <div className="App">
    <Header />
    <NavBar />
    <Routes>
      <Route path='/articles' element={<ListArticles />} />
    </Routes>
    <Footer />
    </div>  
    </>
  );
}

export default App;
