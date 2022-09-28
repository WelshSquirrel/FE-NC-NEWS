const ListArticles = ({articles}) => {

    return (
        <ul>
            {articles.map(article => (<li className='listed-articles' key={article.article_id}>Article Name: {article.title}<br></br>Topic: {article.topic}</li>)
            )}
    </ul>
    )
}

export default ListArticles