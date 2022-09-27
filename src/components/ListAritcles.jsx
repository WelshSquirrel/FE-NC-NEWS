import { useState, useEffect} from "react";
import { getArticles } from '../utils/api.js'

const ListArticles = () => {
    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles().then((res) => {
            setArticles(res)
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        })
    }, [])
    
    if(isLoading) return <p>Loading...</p>
    
    return (
        <div>
            <ul className="article-list">
                {articles.map((article) => {
                    return <li className='listed-articles' key={article.article_id}>Article Name: {article.title}<br></br>Topic: {article.topic}</li>
                })}
            </ul>
        </div>
    );
}
export default ListArticles