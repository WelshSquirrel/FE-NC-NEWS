import { updateVotes } from "../utils/api"
import { useState } from "react"



const Voting = ({article_id, articleVotes}) => {
    
    const [voteCount, setVoteCount ] = useState(0)
    

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
        
    <section >
    <button onClick={() => upVote(article_id)} >
      <span >Like</span>
    </button>
    <button onClick={() => downVote(article_id)} >
      <span >
        Dislike
      </span>
    </button>
    <h3 className={(articleVotes + voteCount) > 0 ? "green-txt" : (articleVotes + voteCount)
    < 0 ? "red-txt" : "txt"}>
      <span >
        Votes
      </span>
      ( {articleVotes + voteCount} vote)
    </h3>
    
    </section>
    )
}

export default Voting