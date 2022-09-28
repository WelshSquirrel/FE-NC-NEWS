import { useState } from "react"
import { Link } from "react-router-dom"


const NavArticle = () => {


return (
    <nav className="article-nav">

        <Link className='nav-article' to="/articles">
        <button>All</button>
        </Link>
        <Link className='nav-article' to="/articles/football">
        <button>Football</button>
        </Link>
        <Link className='nav-article' to={`/articles/cooking`}>
        <button>Cooking</button>
        </Link>
        <Link className='nav-article' to="/articles/coding">
        <button>Coding</button>
        </Link>
    </nav>

)
}

export default NavArticle