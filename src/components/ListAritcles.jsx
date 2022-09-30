import { Link } from "react-router-dom"

const ListArticles = ({articles}) => {

return (
<ul>
    {articles.map(article => (
    
        <li className='listed-articles' key={article.article_id}>
            <Link to={`/article/${article.article_id}`}>{article.title}</Link> <br></br>Topic:
            {article.topic}<br></br>Author: {article.author}</li>
    )
    )}
</ul>
)
}

export default ListArticles