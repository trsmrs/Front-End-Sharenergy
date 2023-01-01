import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import LoginPage from "../pages/LoginPage/Login"
import HomePage from "../pages/MainPage/HomePage"
import RandomUsers from "../pages/MainPage/RandomUsers"



const AppRoutes = () =>{
    return(

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />

                <Route path="/home" element={<HomePage />} />
                <Route path="/random" element={<RandomUsers />} />
            </Routes>
        </Router>

    )
}


export default AppRoutes