import { Link } from "react-router-dom"

const ListArticles = ({articles}) => {

return (
<ul>
    {articles.map(article => (
    
        <li className='listed-articles' key={article.article_id}>
            <Link to={`/article/${article.article_id}`}>Article Name: {article.title}</Link> <br></br>Topic:
            {article.topic}</li>
    )
    )}
</ul>
)
}

export default ListArticles