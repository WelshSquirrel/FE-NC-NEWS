import { useState, useEffect } from "react";
import { getArticleById, getCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import Voting from "./Voting";
import Comment from "./Comment";

const IndividualArticle = () => {

    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments ] = useState([])
    

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((res) => {
            setArticle(res)
            setIsLoading(false)
        })
    }, [article_id]);

    useEffect(() => {
        getCommentsByArticleId(article_id).then((data) => {
            setComments(data);
        })
    }, [article_id])
    
    if(isLoading) return <p>Loading...</p>

    return (
        <div>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <p>{article.created_at}</p>
        <p>By {article.author}</p>
        <Voting article_id={article.article_id} articleVotes={article.votes}/>
        <div className="comment-area">
            <h3 className="comment-header">Comment Section</h3>
            <div>
            {comments.map((comment) => (
                <Comment key={comment.comment_id} comment={comment}/>
            ))}
            </div>
        </div>
        </div>
    )
}

export default IndividualArticle