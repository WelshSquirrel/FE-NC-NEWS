import { updateVotes } from "../utils/api"
import { useState } from "react"

const Voting = ({article_id, articleVotes}) => {
    
    const [voteCount, setVoteCount ] = useState(0)
    console.log(articleVotes)

    const upVote = (Id) => {
        if(voteCount === 0) {
            setVoteCount(1)
            updateVotes(Id, 1)
        } else if (voteCount === -1){
            setVoteCount(0)
            updateVotes(Id, 1)
        }
    }

    const downVote = (Id) => {
        if(voteCount === 0) {
            setVoteCount(-1)
            updateVotes(Id, -1)
        } else if (voteCount === 1){
            setVoteCount(0)
            updateVotes(Id, -1)
        }
    }

    return (
        <div>
            <button onClick={() => upVote(article_id)}>Like</button>
            <button onClick={() => downVote(article_id)}>Disike</button>
        </div>
    )
}

export default Voting