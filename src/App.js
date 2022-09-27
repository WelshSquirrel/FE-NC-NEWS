import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ListArticles from './components/ListAritcles';


function App() {
  
  return (
    <>
    <div className="App">
    <Header />
      <nav className="nav-bar">
          <Link className="nav-title" to="/">
            <span className="nav-group">Home</span>
          </Link>
          <Link className="nav-title" to="/articles">
            <span className="nav-group">Articles</span>
          </Link>
      </nav>
      
    <Routes>
      <Route path='/articles' element={<ListArticles />} />
    </Routes>
    <Footer />
    </div>  
    </>
  );
}

export default App;
