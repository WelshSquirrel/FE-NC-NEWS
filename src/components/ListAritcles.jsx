import { useState, useEffect} from "react";
import { getArticles } from '../utils/api.js'

const ListArticles = ({topicSelect}) => {
    
    
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
    }, [topicSelect])
    
    if(isLoading) return <p>Loading...</p>


    let showAll = () => articles.map(article => (
        <li className='listed-articles' key={article.article_id}>Article Name: {article.title}<br></br>Topic: {article.topic}</li>)
    )

    let filter = () => articles.filter(article => (article.topic === topicSelect)
    ).map(article => (
        <li className='listed-articles' key={article.article_id}>Article Name: {article.title}<br></br>Topic: {article.topic}</li>)
    )

    return (
        <div>
            <ul className="article-list">
                {
                topicSelect === 'No Category' ? showAll() : filter()
                }
            </ul>
        </div>
    );
}
export default ListArticles