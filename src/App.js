import './App.css';
import {Route, Routes, Link } from 'react-router-dom';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Articles from './components/articles.jsx'


function App() {
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <Articles />
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
