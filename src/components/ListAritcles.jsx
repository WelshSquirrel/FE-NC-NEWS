import { useState, useEffect} from "react";
import { getArticles } from '../utils/api.js'

const ListArticles = () => {
    
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((res) => {
            console.log(res)
            setArticles(res)
        })
    }, [])
    
    return (
        <div>
            <ul className="article-list">
                {articles.map((article) => {
                    return <li key={article.article_id}>Article Name: {article.title}<br></br>Topic: {article.topic}</li>
                })}
            </ul>
        </div>
    );
}
export default ListArticles