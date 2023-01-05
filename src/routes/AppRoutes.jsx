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




const AppRoutes = () =>{
    const user = localStorage.getItem("token");

    return(

        <Router>
            <Routes>
                 <Route path="/" element={<LoginPage />} />
              
                 <Route path="/customers" element={<Customers />} />
                 <Route path="/customers/add" element={<CustomersAdd />}/>   
                 <Route path="/customers/edit/:id" element={<CustomersEdit />}/>   

                 {user &&<Route path="/random" element={<RandomUsers />} />}
                <Route path="/random" element={<Navigate replace to='/'/>}/>
                <Route path="/random/dogs" element={<RandomDogs />}/>
                <Route path="/httpcat" element={<HttpCats />}/>
            </Routes>
        </Router>

    )
}


export default AppRoutes