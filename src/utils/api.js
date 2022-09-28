import axios from 'axios';


const newsApi = axios.create({
    baseURL: "https://arans-be-news.herokuapp.com/api"
});

export const getArticles = (query) => {
    return newsApi.get('/articles', {params: {topic: query}}).then(({data}) => {
        return data.articles
    })
}

export const getArticleById = (Id) => {
    return newsApi.get(`/articles/${Id}`)
    .then(({data}) => {
        return data.article
    })
}