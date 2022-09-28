import { Route, Routes, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from '../utils/api.js'
import NavArticle from "./NavArticle";
import ListArticles from "./ListAritcles.jsx";

const Articles = () => {

const [isLoading, setIsLoading] = useState(true);
const [articles, setArticles] = useState([])

const { topic } = useParams()


useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((res) => {
        setArticles(res)
        setIsLoading(false);
    })
}, [topic])

if(isLoading) return <p>Loading...</p>

return (
    <div>
        <div>
            <NavArticle />
        </div>
        <ListArticles articles={articles} />
    </div>
)
};

export default Articles;