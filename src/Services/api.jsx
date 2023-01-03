// import axios from 'axios'




// export const api = axios.create({
//     baseURL:  'http://127.0.0.1:8080',
// })



// export const createSession = async (name, password) =>{
//     const userData = await api.post('session', {name, password})
//     console.log(userData)
// }



// export const GetRandomUsers = async(userId, query) =>{
//     let url = `/users/${userId}/randomusers/`

//     if(query !== ''){
//         url += `?q=${query}`
//     }

//     return api.get(url)

// }
// export const GetCustomers = async(userId, query) =>{
//     let url = `/users/${userId}/customers/`

//     if(query !== ''){
//         url += `?q=${query}`
//     }

//     return api.get(url)
// }

