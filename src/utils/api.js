import axios from 'axios';


const newsApi = axios.create({
    baseURL: "https://arans-be-news.herokuapp.com/api"
});

export const getArticles = (params) => {
    return newsApi.get('/articles', { params }).then((res) => {
        return res.data
    })
}

export const getArticleById = (Id) => {
    return newsApi.get(`/articles/${Id}`)
    .then(({data}) => {
        return data.article
    })
}

export const updateVotes = (Id, num) => {
    return newsApi.patch(`/articles/${Id}`, {inc_votes: num}).then(({data}) => {
        return data
    })
}

export const getCommentsByArticleId = (Id) => {
    return newsApi.get(`/articles/${Id}/comments`).then(({data}) => {
        return data.comments
    })
}

export const postComment = (Id, username, body) => {
    return newsApi.post(`/articles/${Id}/comments`, {username: username, body: body}).then(({data}) => {
        return data
    })
}