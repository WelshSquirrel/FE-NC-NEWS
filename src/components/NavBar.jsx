import { Route, Routes, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-bar">
          <Link className="nav-title" to="/">
            <span className="nav-group">Home</span>
          </Link>
          <Link className="nav-title" to="/articles">
            <span className="nav-group">Articles</span>
          </Link>
      </nav>
    )
}

export default NavBar