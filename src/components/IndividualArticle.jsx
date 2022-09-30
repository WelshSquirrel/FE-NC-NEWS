import { useState, useEffect } from "react";
import { getArticleById, getCommentsByArticleId, postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import Voting from "./Voting";
import Comment from "./Comment";

const IndividualArticle = () => {

    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments ] = useState([])
    const [newComment, setNewComment ] = useState("");
    const [errorSubmit, setErrorSubmit ] = useState(false)


    const onSubmit = () => {
        setIsLoading(true)
        setComments((prevComments) => {
            const newComments = [{comment_id:Date.now(), body: newComment, author: "grumpy19"},...prevComments]
            return newComments;
        })
        postComment(article_id, "grumpy19", newComment).then((res) => {
                setIsLoading(false)
        }).catch((err) => {
            return setErrorSubmit(true)
        })
    }

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then((res) => {
            setArticle(res)
            setIsLoading(false)
        })
    }, [article_id]);

    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleId(article_id).then((data) => {
            setComments(data);
            setIsLoading(false)
        })
    }, [article_id])
    
    if(isLoading) return <p>Loading...</p>
    if(errorSubmit) return <p>Error submitting comment</p>
    return (
        <div>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <p>{article.created_at}</p>
        <p>By {article.author}</p>
        <Voting article_id={article.article_id} articleVotes={article.votes}/>
        <div className="comment-area">
            <h3 className="comment-header">Comment Section</h3>
            <div className="comment-form-title">Write Comment</div>
                <form onSubmit={onSubmit}>
                <textarea className="comment-form-text" value= {newComment} onChange={(e) => setNewComment(e.target.value)}/>
                <button>Submit</button>
                </form>
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