import { useState } from "react";
import { Link } from "react-router-dom";
import ListArticles from "./ListAritcles";

const Search = ({topic}) => {

const [topicSelect, setTopicSelect ] = useState("Search By")

console.log(topic)

const handleSubmit = (event) => {
    event.preventDefault();
    setTopicSelect(event.target.value);
    setTopicSelect("")
};

return (
	<div>
<form onSubmit={handleSubmit}>
    <label> </label>
      <nav className="article-nav">
	  <Link className='nav-article'to="/articles">All</Link>
        <Link className='nav-article'to="/articles/football">football</Link>
        <Link className='nav-article'to="/articles/cooking">cooking</Link>
		<Link className='nav-article'to="/articles/coding">coding</Link>
      </nav>
</form>
	<ListArticles topicSelect={topic}/>
</div>
)
}
export default Search