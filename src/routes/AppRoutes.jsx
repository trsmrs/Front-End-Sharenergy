import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import LoginPage from "../pages/LoginPage/Login"

import Customers from "../pages/MainPage/Customers"
import CustomersAdd from "../pages/MainPage/CustomersAdd"
import CustomersEdit from "../pages/MainPage/CustomersEdit"
import RandomUsers from "../pages/MainPage/RandomUsers"
import RandomDogs from "../pages/MainPage/RandomDogs"
import HttpCats from "../pages/MainPage/HttpCat"




const AppRoutes = () => {
    const user = localStorage.getItem("token");
    const tempUser = sessionStorage.getItem('token')
    let session

    user ? session = user : session = tempUser

    return (

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />

                { session &&  <Route path="/random" element={<RandomUsers />} />}
                <Route path="/random" element={<Navigate replace to='/' />} />


                {session && <Route path="/customers" element={<Customers />} />}
                <Route path="/customers" element={<Navigate replate to='/' />} />


                {session && <Route path="/customers/add" element={<CustomersAdd />} />}
                <Route path="/customers/add" element={<Navigate replate to='/' />} />


                {session && <Route path="/customers/edit/:id" element={<CustomersEdit />} />}
                <Route path="/customers/edit/:id" element={<Navigate replate to='/' />} />



                {session && <Route path="/random/dogs" element={<RandomDogs />} />}
                <Route path="/random/dogs" element={<Navigate replate to='/' />} />

                {session && <Route path="/httpcat" element={<HttpCats />} />}
                <Route path="/httpcat" element={<Navigate replate to='/' />} />



            </Routes>
        </Router>

    )
}


export default AppRoutes