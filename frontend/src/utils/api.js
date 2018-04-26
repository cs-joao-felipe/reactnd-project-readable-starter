
import * as Helpers from './helpers'
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// Categories

export const getAllCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

// Posts

export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)

export const getPostById = (id) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)

export const createPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...post,
            timestamp: Date.now()
        })
    }).then(res => res.json())
        .then(data => data)

export const upVotePostById = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: 'upVote' })
    }).then(res => res.json())
        .then(data => data)

export const downVotePostById = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: 'downVote' })
    }).then(res => res.json())
        .then(data => data)

export const updatePostById = (id, title, body) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    }).then(res => res.json())
        .then(data => data)

export const deletePostById = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => data)

// Comments

export const getCommentsByPost = (id) =>
    fetch(`${api}/comments/${id}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)

export const getCommentById = (id) =>
    fetch(`${api}/comments/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)

export const updateCommentById = (id, body) =>
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...body,
            timestamp: Helpers.getJSONDate
        })
    }).then(res => res.json())
        .then(data => data)

export const upVoteCommentById = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: 'upVote' })
    }).then(res => res.json())
        .then(data => data)

export const downVoteCommentById = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: 'downVote' })
    }).then(res => res.json())
        .then(data => data)

export const createComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...comment,
            timestamp: Helpers.getJSONDate
        })
    }).then(res => res.json())
        .then(data => data)