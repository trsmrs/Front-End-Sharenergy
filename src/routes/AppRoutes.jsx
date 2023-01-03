import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import LoginPage from "../pages/LoginPage/Login"
import SingupPage from "../pages/LoginPage/Singup"
import Customers from "../pages/MainPage/Customers"
import RandomUsers from "../pages/MainPage/RandomUsers"
import Teste from "../pages/Teste"



const AppRoutes = () =>{
    const user = localStorage.getItem("token");

    return(

        <Router>
            <Routes>
                 <Route path="/" element={<LoginPage />} />
                 <Route path="/ts" element={<Customers />} />
                 <Route path="/signup" element={<SingupPage />} />

                 <Route path="/customers" element={<Customers />} />
                 {user &&<Route path="/random" element={<RandomUsers />} />}
                <Route path="/random" element={<Navigate replace to='/'/>}/>
            </Routes>
        </Router>

    )
}


export default AppRoutes