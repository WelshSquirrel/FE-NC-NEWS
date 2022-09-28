import { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";

const IndividualArticle = () => {

    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getArticleById(article_id).then((res) => {
            setArticle(res)
            setIsLoading(false)
        })
    }, [article_id]);
    
    return (
        <div>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <p>{article.created_at}</p>
        <p>By {article.author}</p>
        </div>
    )
}

export default IndividualArticle