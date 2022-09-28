import { useState } from "react"
import { Link } from "react-router-dom"


const NavArticle = () => {
const [topicName, setTopicName ] = useState('Select Topic')

return (
    <nav className="article-nav">

        <Link className='nav-article' to="/articles">
        <button onClick={()=> [setTopicName('All Topics')]}>All</button>
        </Link>
        <Link className='nav-article' to="/articles/football">
        <button onClick={()=> [setTopicName('football')]}>Football</button>
        </Link>
        <Link className='nav-article' to={`/articles/cooking`}>
        <button onClick={()=> [setTopicName('cooking')]}>Cooking</button>
        </Link>
        <Link className='nav-article' to="/articles/coding">
        <button onClick={()=> [setTopicName('coding')]}>Coding</button>
        </Link>
    </nav>

)
}

export default NavArticle