import { Route, Routes, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from '../utils/api.js'
import NavArticle from "./NavArticle";
import ListArticles from "./ListAritcles.jsx";

const Articles = () => {
const { topic } = useParams();
const [isLoading, setIsLoading] = useState(true);
const [articles, setArticles] = useState([])
const [params, setParams ] = useState({})

useEffect(() => {
    setIsLoading(true);
    getArticles(params).then(({ articles }) => {
        setArticles(articles)
        setIsLoading(false);
    })
}, [params])

useEffect(() => {
    setParams({ topic })
}, [topic])

const handleSort = (event) => {
    console.log(event.target.value)
    const column = event.target.value;
    setParams((currParams, ) => {
        return { ...currParams, sort_by: column}
    })
}

if(isLoading) return <p>Loading...</p>

return (
    <div>
        <div>
            <NavArticle />
            <select onChange={handleSort}>
                <option value='title'>Sort By</option>
                <option value='title'>Title</option>
                <option value='author'>Author</option>
                <option value='votes'>Votes</option>
                <option value='created_at'>Release Date</option>
            </select>
        </div>
        <ListArticles params={params} articles={articles} />
    </div>
)
};

export default Articles;