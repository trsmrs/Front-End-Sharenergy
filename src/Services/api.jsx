import axios from 'axios'




export const api = axios.create({
    baseURL:  'http://127.0.0.1:3000',
})


export const GetRandomUsers = async(userId, query) =>{
    let url = `/users/${userId}/randomusers/`

    if(query !== ''){
        url += `?q=${query}`
    }

    return api.get(url)
}

