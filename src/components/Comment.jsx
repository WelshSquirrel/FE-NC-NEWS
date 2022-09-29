const Comment = ({comment}) => {
    return (
        <div className="comment">
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">
                        {comment.author}
                    </div>
                    <div>
                        <img src=""></img>
                    </div>
                </div>
                <div className="comment-text">{comment.body}</div>
                <div>
                    <vote></vote>
                </div>
                <div className="comment-date">{comment.created_at}</div>
            </div>
        </div>
    )
}

export default Comment;